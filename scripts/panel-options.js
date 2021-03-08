import { writeFileSync, readFileSync, existsSync } from "fs";
import panelOptionsConfig from "../panel-options.config.js";

const IN_PATHS = {
  css: "dist/style.css",
  html: "dist/svg-data.svg",
  onRender: "dist/on-render.js",
  onInit: "dist/on-init.js",
  codeData: "dist/custom-properties.json",
};

const OUT_PATH = "dist/panel-options.json";

const panelOptions = panelOptionsConfig;

function exportPanelOptions() {
  // Read in files
  for (const [key, path] of Object.entries(IN_PATHS)) {
    if (existsSync(path)) {
      panelOptions[key] = readFileSync(path, "utf8");
    } else {
      console.warn(path + " does not exist, using default values.");
    }
  }

  // Write out file
  writeFileSync(OUT_PATH, JSON.stringify(panelOptions, null, 2) + "\n");
  console.log("Successfully written " + OUT_PATH);
}

export default exportPanelOptions();
