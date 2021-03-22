import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import { optimize } from "svgo";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import { svgoConfig } from "./svgo.config";

const OUT_DIR = "public/build";

function svgo(options) {
  return {
    name: "svgo",
    // eslint-disable-next-line consistent-return
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

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: "src/devSite/index.ts",
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
    input: "src/onInit.ts",
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
    input: "src/onRender.ts",
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
