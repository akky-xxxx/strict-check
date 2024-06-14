import eslintConfigSCJest from "eslint-config-sc-jest"
import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  ...eslintConfigSCJest.configs.baseRecords,
  ...eslintConfigSCJest.configs.customRecords,
  ...eslintConfigSCJs.configs.recommended,
  ...eslintConfigSCJest.configs.eslintOverrideRecords,
  {
    files: ["**/*.js"],
  },
]
