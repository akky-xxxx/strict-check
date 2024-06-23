import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("typescript", ["next", "jest", "storybook"]),
  {
    languageOptions: {
      parserOptions: {
        project: "sample/ts-next-jest-storybook/tsconfig.json",
      },
    },
    files: ["**/*.ts{,x}"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
].flat()
