import eslintConfigSC from "eslint-config-sc"

export default [
  eslintConfigSC.getConfigs("javascript", ["next", "jest", "storybook"]),
  {
    languageOptions: {
      parserOptions: {
        project: "sample/js-next-jest-storybook/tsconfig.json",
      },
    },
    files: ["**/*.js{,x}"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
].flat()
