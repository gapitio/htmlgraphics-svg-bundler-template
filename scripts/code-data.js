import { writeFileSync, readFileSync } from "fs";

const IN_PATH = "src/code-data.json";
const OUT_PATH = "dist/code-data.json";

function isValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}

function exportJSON() {
  const codeData = readFileSync(IN_PATH, "utf8");

  if (isValidJSONString(codeData)) {
    writeFileSync(OUT_PATH, codeData);
    console.log("Successfully written " + OUT_PATH);
  }
}

export default exportJSON();
