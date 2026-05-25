import nextConfig from "eslint-config-next";
import jestDom from "eslint-plugin-jest-dom";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import testingLibrary from "eslint-plugin-testing-library";

const testFiles = ["**/__tests__/**/*.{js,jsx,ts,tsx}", "**/*.{test,spec}.{js,jsx,ts,tsx}"];

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react-hooks/exhaustive-deps": "error",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
    },
  },
  {
    files: testFiles,
    plugins: {
      ...testingLibrary.configs["flat/react"].plugins,
      ...jestDom.configs["flat/recommended"].plugins,
    },
    rules: {
      ...testingLibrary.configs["flat/react"].rules,
      ...jestDom.configs["flat/recommended"].rules,
    },
  },
];

export default config;
