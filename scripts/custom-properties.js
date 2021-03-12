import { writeFileSync, readFileSync } from "fs";

const IN_PATH = "src/custom-properties.json";
const OUT_PATH = "dist/custom-properties.json";

function isValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return false;
  }
  return true;
}

function exportJSON() {
  const customProperties = readFileSync(IN_PATH, "utf8");

  if (isValidJSONString(customProperties)) {
    writeFileSync(OUT_PATH, customProperties);
    // eslint-disable-next-line no-console
    console.log(`Successfully written ${OUT_PATH}`);
  }
}

exportJSON();
