import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("typescript", ["jest"]),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    files: ["**/*.ts"],
  },
].flat()
