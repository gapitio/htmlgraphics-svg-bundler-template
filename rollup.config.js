import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { swc } from "rollup-plugin-swc3";

const OUT_DIR = "dist";

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: "src/onInit.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: false,
    },
    plugins: [
      postcss({
        extract: "style.css",
      }),
      swc(),
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
      sourcemap: false,
    },
    plugins: [
      swc(),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
