// import babel from "rollup-plugin-babel";
// import postcss from "rollup-plugin-postcss";
// import resolve from "@rollup/plugin-node-resolve";
//import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcssEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";

// const extensions = [".js", ".jsx", ".ts", ".tsx"];

// const globals = {
//   react: "React",
//   "react-dom": "ReactDOM",
//   "core-js": "core-js",
// };

// const globalModules = Object.keys(globals);

const sourceMap = true;

// export default {
//   input: {
//     index: "./src/index.ts",
//   },
//   preserveModules: false,
//   treeshake: false,
//   output: [
//     {
//       dir: "dist",
//       format: "esm",
//       globals,
//       sourcemap: sourceMap,
//       preferConst: true,
//     },
//   ],
//   plugins: [
//     resolve({ extensions }),
//     commonjs({
//       include: "**/node_modules/**",
//       namedExports: {},
//     }),
//     babel({
//       sourceMap,
//       extensions,
//       include: ["src/**/*"],
//       exclude: ["node_modules/**", "**/*.css"],
//     }),
//     postcss({
//       plugins: [postcssImport(), postcssEnv(), autoprefixer()],
//       namedExports: true,
//       modules: {
//         generateScopedName: "[folder]_[local]-[hash:base64:5]",
//       },
//       sourceMap,
//       configFile: false,
//       extract: true,
//       preserveModules: true,
//       writeDefinitions: true,
//     }),
//   ],
//   external: (id) => globalModules.includes(id) || /core-js/.test(id),
// };

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ts-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        plugins: [postcssImport(), postcssEnv(), autoprefixer()],
        namedExports: true,
        modules: true,
        sourceMap,
        configFile: false,
        extract: false,
        preserveModules: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
