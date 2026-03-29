import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("javascript", ["next", "jest", "storybook"]),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    files: ["**/*.js{,x}"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
].flat()
