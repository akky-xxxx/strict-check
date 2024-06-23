import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("typescript"),
  {
    languageOptions: {
      parserOptions: {
        project: "sample/ts/tsconfig.json",
      },
    },
    files: ["**/*.ts"],
  },
].flat()
