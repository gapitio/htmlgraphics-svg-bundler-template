import { writeFileSync, readFileSync } from "fs";

const IN_PATH = "src/custom-variables.json";
const OUT_PATH = "dist/custom-variables.json";

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
  const customVariables = readFileSync(IN_PATH, "utf8");

  if (isValidJSONString(customVariables)) {
    writeFileSync(OUT_PATH, customVariables);
    console.log("Successfully written " + OUT_PATH);
  }
}

export default exportJSON();
