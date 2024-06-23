import eslintConfigSC from "eslint-config-sc"

export default [
  eslintConfigSC.getConfigs("javascript"),
  {
    files: ["**/*.js"],
  },
].flat()
