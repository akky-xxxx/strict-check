import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("javascript"),
  {
    files: ["**/*.js"],
  },
].flat()
