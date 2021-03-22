import type { PanelData } from "@grafana/data";
import type { OptionsInterface } from "./htmlgraphicsTypes/options";
import type customPropertiesJSON from "../src/custom-properties.json";
import type { HTMLNode } from "./htmlgraphicsTypes/htmlNode";
import type { GrafanaTheme } from "./htmlgraphicsTypes/theme";

declare global {
  /**
   * The HTML node from the HTML/SVG code.
   *
   * It's a shadow root https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM.
   */
  const htmlNode: HTMLNode;
  const customProperties: typeof customPropertiesJSON;

  /**
   * Result set of panel queries
   * https://grafana.com/docs/grafana/latest/packages_api/data/paneldata/.
   */
  const data: PanelData;

  /**
   * The panel options.
   */
  const options: OptionsInterface;

  /**
   * Grafana theme.
   * Here you can get the current theme, colors, sizes, ETC.
   *
   * https://grafana.com/docs/grafana/latest/packages_api/data/grafanatheme/
   */
  const theme: GrafanaTheme;

  interface Window {
    htmlNode: typeof htmlNode;
    customProperties: typeof customProperties;
    data: typeof data;
    options: typeof options;
    theme: typeof theme;
  }
}
