import eslintConfigSC from "eslint-config-sc"

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
