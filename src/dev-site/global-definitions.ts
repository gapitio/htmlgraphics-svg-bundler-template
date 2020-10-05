/*
  Creates global variables used in on-init and on-render
*/

import codeData from "../code-data.json";

window.codeData = codeData;
window.options = {
  add100Percentage: false,
  centerAlignContent: false,
  SVGBaseFix: false,
  css: "",
  html: "",
  onRender: "",
  onInit: "",
  codeData: "",
};
