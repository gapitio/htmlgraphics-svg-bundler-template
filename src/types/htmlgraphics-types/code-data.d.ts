import codeDataJSON from "../../code-data.json";

declare global {
  const codeData: typeof codeDataJSON;
}
