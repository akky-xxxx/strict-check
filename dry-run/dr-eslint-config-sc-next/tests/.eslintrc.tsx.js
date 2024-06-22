const eslintConfigSCNext = require("eslint-config-sc-next")

module.exports = {
  extends: [
    "plugin:@next/next/core-web-vitals",
    "sc-ts/legacy",
    "sc-react/legacy"
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@next/next"],
  rules: {
    ...eslintConfigSCNext.configs.nextRecord.rules,
    ...eslintConfigSCNext.configs.scRectCustomRecordWithTypescript.rules,
    ...eslintConfigSCNext.configs.resetRecordForStylistic.rules,
    "@next/next/no-html-link-for-pages": 0,
  },
}
