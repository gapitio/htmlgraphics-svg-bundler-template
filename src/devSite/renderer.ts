/*
  Loads on-render and executes it each time the refresh button is pressed
*/

import { updateData } from "./data";

async function makeRequest(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const result = await response.text();
  return result;
}

async function getOnRenderFunction() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const ON_RENDER_PATH = "./build/onRender.js";
  const SOURCE_MAP_PATH = `${ON_RENDER_PATH}.map`;

  // Get the onRender code
  const onRenderResponse = await makeRequest(ON_RENDER_PATH);
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const onRender = new Function(
    `${onRenderResponse}\n//# sourceMappingURL=${SOURCE_MAP_PATH}`
  );

  return onRender;
}

function renderHandler() {
  updateData();

  const refreshButton = document.querySelector("#refresh-button");
  if (!refreshButton) throw new Error("Could not find refresh button.");

  const panelUpdateEvent = new CustomEvent("panelupdate");

  window.addEventListener("load", () => {
    htmlNode.onpanelupdate();
    htmlNode.dispatchEvent(panelUpdateEvent);
  });

  getOnRenderFunction()
    .then((onRender) => {
      refreshButton.addEventListener("click", () => {
        updateData();
        htmlNode.dispatchEvent(panelUpdateEvent);
        htmlNode.onpanelupdate();

        if (!refreshButton.classList.contains("executed")) {
          // eslint-disable-next-line no-console
          console.warn(
            "Executing onRender through a Function object. Line numbers might be inaccurate."
          );

          refreshButton.classList.add("executed");
        }

        onRender();
      });
      return onRender;
    })
    .catch((error) => {
      throw error;
    });
}

renderHandler();
