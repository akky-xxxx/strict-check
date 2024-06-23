import eslintConfigSC from "eslint-config-sc"

export default [
  eslintConfigSC.getConfigs("javascript", ["jest"]),
  {
    files: ["**/*.js"],
  },
].flat()
