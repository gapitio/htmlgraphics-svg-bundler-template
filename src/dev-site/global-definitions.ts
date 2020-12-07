/*
  Creates global variables used in on-init and on-render
*/

import customVariables from "../custom-variables.json";

window.customVariables = customVariables;
window.options = {
  add100Percentage: false,
  centerAlignContent: false,
  SVGBaseFix: false,
  css: "",
  html: "",
  onRender: "",
  onInit: "",
  customVariables: "",
};
