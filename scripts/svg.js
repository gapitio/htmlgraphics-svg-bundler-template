import { readFileSync, writeFileSync } from "fs";
import { optimize } from "svgo";
import { svgoConfig } from "../svgo.config.js";

const IN_PATH = "src/design/svgData.svg";
const OUT_PATH = "dist/svgData.svg";

const writeSVGData = () => {
  const svgData = readFileSync(IN_PATH, "utf8");
  const result = optimize(svgData, { path: IN_PATH, ...svgoConfig });
  writeFileSync(OUT_PATH, result.data);
  console.log(`Successfully written ${OUT_PATH}`);
};

writeSVGData();
