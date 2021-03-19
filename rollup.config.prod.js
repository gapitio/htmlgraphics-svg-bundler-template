import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

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
      typescript(),
      terser(),
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
      typescript(),
      terser(),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
