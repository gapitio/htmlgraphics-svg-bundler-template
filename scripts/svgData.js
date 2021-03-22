import { readFileSync, writeFileSync } from "fs";
import { optimize } from "svgo";
// eslint-disable-next-line import/extensions
import { svgoConfig } from "../svgo.config.js";

const IN_PATH = "src/design/svgData.svg";
const OUT_PATH = "dist/svgData.svg";

const writeSVGData = () => {
  const svgData = readFileSync(IN_PATH, "utf8");
  const result = optimize(svgData, { path: IN_PATH, ...svgoConfig });
  writeFileSync(OUT_PATH, result.data);
  // eslint-disable-next-line no-console
  console.log(`Successfully written ${OUT_PATH}`);
};

writeSVGData();
