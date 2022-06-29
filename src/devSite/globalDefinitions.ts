/*
  Creates global variables used in on-init and on-render
*/

import customProperties from "../custom-properties.json";
import { defaultPanelOptions } from "../../panelOptions.config.js";

window.customProperties = customProperties;
window.options = defaultPanelOptions;
