import customVariablesJSON from "../../src/custom-variables.json";

declare global {
  const customVariables: typeof customVariablesJSON;
}
