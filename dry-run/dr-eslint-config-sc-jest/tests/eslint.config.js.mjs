import eslintConfigSCJest from "eslint-config-sc-jest"
import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  eslintConfigSCJs.configs.recommended,
  eslintConfigSCJest.configs.recommended,
  {
    files: ["**/*.js{,x}"],
  },
].flat()
