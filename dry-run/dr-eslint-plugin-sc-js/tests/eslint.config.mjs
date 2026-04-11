import eslintPluginSCJs from "eslint-plugin-sc-js"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintPluginSCJs.configs.recommended,
  {
    files: ["**/*.js"],
  },
  eslintConfigPrettier,
]
