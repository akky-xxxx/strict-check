import eslintConfigSCJs from "eslint-config-sc-js"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintConfigSCJs.configs.recommended,
  {
    files: ["**/*.js"],
  },
  eslintConfigPrettier,
].flat()
