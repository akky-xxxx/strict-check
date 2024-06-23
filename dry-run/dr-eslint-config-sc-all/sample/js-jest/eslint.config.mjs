import eslintConfigSC from "eslint-config-sc-all"

export default [
  eslintConfigSC.getConfigs("javascript", ["jest"]),
  {
    files: ["**/*.js"],
  },
].flat()
