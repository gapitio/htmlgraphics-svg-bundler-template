import { PanelData } from "@grafana/data";

declare global {
  const data: PanelData;

  interface Window {
    htmlNode: typeof htmlNode;
    customProperties: typeof customProperties;
    data: typeof data;
    options: typeof options;
    theme: typeof theme;
  }
}
