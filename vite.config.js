import { optimize } from "svgo";
import { defineConfig } from "vite";
import { svgoConfig } from "./svgo.config.js";

function svgo(options) {
  return {
    name: "svgo",
    transform: (code, id) => {
      if (id.endsWith(".svg")) {
        const result = optimize(code, { path: id, ...options });
        return {
          map: { mappings: "" },
          code: `export default ${JSON.stringify(result.data)}`,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [svgo(svgoConfig)],
});
