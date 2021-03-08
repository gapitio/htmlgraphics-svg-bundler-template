import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import { optimize } from "svgo";
import svgoConfig from "./svgo.config";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

const OUT_DIR = "public/build";

export default [
  {
    input: "src/dev-site/index.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      svgo(svgoConfig),
      json({
        preferConst: true,
      }),
      typescript({
        check: false,
        tsconfig: "./tsconfig.json",
      }),
      nodeResolve({
        browser: true,
      }),
      livereload(OUT_DIR),
    ],
  },
  {
    input: "src/on-init.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      postcss({
        extract: "style.css",
      }),
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
  {
    input: "src/on-render.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];

function svgo(options) {
  return {
    name: "svgo",
    transform: (code, id) => {
      if (id.endsWith(".svg")) {
        const result = optimize(code, { path: id, ...options });
        return {
          map: { mappings: "" },
          code: "export default " + JSON.stringify(result.data),
        };
      }
    },
  };
}
