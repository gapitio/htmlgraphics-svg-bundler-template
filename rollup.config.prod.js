import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const OUT_DIR = "dist";

export default [
  {
    input: "src/on-init.ts",
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
  {
    input: "src/on-render.ts",
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
