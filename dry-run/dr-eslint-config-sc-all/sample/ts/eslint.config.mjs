import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("typescript"),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    files: ["**/*.ts"],
  },
].flat()
