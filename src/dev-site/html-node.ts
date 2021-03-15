import type { HTMLNode } from "../../types/htmlgraphics-types/html-node";
import svgData from "../design/svg-data.svg";

const shadowContainer = document.querySelector("#shadow-container");
if (!shadowContainer) throw new Error("Could not find shadow container.");

window.htmlNode = shadowContainer.attachShadow({ mode: "open" }) as HTMLNode;

htmlNode.onpanelupdate = () => {};
htmlNode.innerHTML = `<style>@import "build/style.css"</style><div>${svgData}</div>`;
