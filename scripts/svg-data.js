import { readFileSync, writeFileSync } from "fs";
import { optimize } from "svgo";
import svgoConfig from "../svgo.config.js";

const IN_PATH = "src/design/svg-data.svg";
const OUT_PATH = "dist/svg-data.svg";

const svgData = () => {
  const svgData = readFileSync(IN_PATH, "utf8");
  const result = optimize(svgData, { path: IN_PATH, ...svgoConfig });
  writeFileSync(OUT_PATH, result.data);
  console.log("Successfully written " + OUT_PATH);
};

export default svgData();
