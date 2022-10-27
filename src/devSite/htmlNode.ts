import type { HTMLNode } from "../../types/htmlgraphicsTypes/htmlNode";
import html from "../design/svgData.svg?raw";

const shadowContainer = document.querySelector("#shadow-container");
if (!shadowContainer) throw new Error("Could not find shadow container.");

window.htmlNode = shadowContainer.attachShadow({ mode: "open" }) as HTMLNode;

htmlNode.onpanelupdate = () => {
  // Do nothing
};

htmlNode.innerHTML = `<style></style>${html}`;

if (window.options.add100Percentage) {
  htmlNode.children[1].setAttribute("height", "100%");
  htmlNode.children[1].setAttribute("width", "100%");
}

// Copy the styles in the document head into the shadow DOM
const stylesNodes: Node[] = [];
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.target === document.head) {
      for (const n of mutation.addedNodes) {
        stylesNodes.push(n);
      }
    }
  }

  htmlNode.children[0].innerHTML = stylesNodes
    .map((s) => s.textContent)
    .join("");
});
observer.observe(document.head, { childList: true, subtree: true });
