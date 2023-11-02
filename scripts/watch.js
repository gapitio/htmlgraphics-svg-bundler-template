#!/usr/bin/env node

import { readFileSync } from "node:fs";
import path from "node:path";
import * as rollup from "rollup";
import { loadConfigFile } from "rollup/loadConfigFile";

import { watch } from "chokidar";
import "dotenv/config";
import { optimize } from "svgo";
import { svgoConfig } from "../svgo.config.js";

import { defaultPanelOptions } from "../panelOptions.config.js";

const grafanaUrl = process.env.GRAFANA_URL;
const grafanaOrgId = process.env.GRAFANA_ORG_ID;
const grafanaToken = process.env.GRAFANA_TOKEN;
const grafanaFolderUid = process.env.GRAFANA_FOLDER_UID;

const panelOptions = defaultPanelOptions;

const svgWatcher = watch("src/design/svgData.svg", {
  awaitWriteFinish: { stabilityThreshold: 50 },
});
svgWatcher.on("change", (path) => {
  panelOptions.html = generateSvg(path);
  uploadPanel();
});

const customPropertiesWatcher = watch("src/custom-properties.json", {
  awaitWriteFinish: { stabilityThreshold: 50 },
});
customPropertiesWatcher.on("change", (path) => {
  panelOptions.codeData = generateCustomProperties(path);
  uploadPanel();
});

const { options, warnings } = await loadConfigFile(
  path.resolve("rollup.config.js"),
);
console.log(`Rollup warning count: ${warnings.count}`);
warnings.flush();

panelOptions.html = generateSvg("src/design/svgData.svg");
panelOptions.codeData = generateCustomProperties("src/custom-properties.json");

rollup
  .watch(
    options.map((option) => {
      option.watch = { skipWrite: true };
      return option;
    }),
  )
  .on("event", async (e) => {
    switch (e.code) {
      case "BUNDLE_END": {
        const { output } = await e.result.generate({
          format: "iife",
          dir: "dist",
        });
        await generateBundle(output);
        break;
      }
      case "END": {
        await uploadPanel();
        break;
      }
    }
  });

function generateSvg(path) {
  const svgData = readFileSync(path, "utf8");
  const result = optimize(svgData, { ...svgoConfig });
  return result.data;
}

function generateCustomProperties(path) {
  const customProperties = readFileSync(path, "utf8");
  return customProperties;
}

async function generateBundle(output) {
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === "asset") {
      if (chunkOrAsset.fileName === "style.css") {
        panelOptions.css = String(chunkOrAsset.source);
      } else {
        console.warn(
          `Asset ${chunkOrAsset.fileName} is not valid in HTMLGraphics`,
        );
      }
    } else {
      if (chunkOrAsset.fileName === "onInit.js") {
        panelOptions.onInit = chunkOrAsset.code;
      } else if (chunkOrAsset.fileName === "onRender.js") {
        panelOptions.onRender = chunkOrAsset.code;
      } else {
        console.warn(
          `Chunk ${chunkOrAsset.fileName} is not valid in HTMLGraphics`,
        );
      }
    }
  }
}

async function uploadPanel() {
  const panelFile = readFileSync("panel.json");

  const panel = JSON.parse(panelFile);

  panel.panels[0].options = panelOptions;

  const bodyJson = {
    dashboard: panel,
    message: "Update from HTMLGraphics",
    overwrite: true,
  };
  if (grafanaFolderUid !== "") bodyJson.folderUid = grafanaFolderUid;

  const response = await fetch(`${grafanaUrl}/api/dashboards/db`, {
    body: JSON.stringify(bodyJson),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Grafana-Org-Id": grafanaOrgId,
      Authorization: `Bearer ${grafanaToken}`,
    },
  });

  console.log(response.status);
  console.log(await response.text());
}
