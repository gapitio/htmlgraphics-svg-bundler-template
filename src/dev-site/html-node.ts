import svgData from "../design/svg-data-inkscape.svg";

window.htmlNode = document
  .getElementById("shadow-container")
  .attachShadow({ mode: "open" });

htmlNode.innerHTML = `<style></style><div>${svgData}</div>`;
