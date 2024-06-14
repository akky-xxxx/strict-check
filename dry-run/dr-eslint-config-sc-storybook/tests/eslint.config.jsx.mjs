import eslintConfigSCJs from "eslint-config-sc-js"
import eslintConfigSCReact from "eslint-config-sc-react"
import eslintConfigSCStorybook from "eslint-config-sc-storybook"

export default [
  ...eslintConfigSCJs.configs.baseRecords1,
  ...eslintConfigSCReact.configs.baseRecords,
  ...eslintConfigSCReact.configs.customRecords,
  ...eslintConfigSCStorybook.configs.recommended,
  {
    files: ["**/*.jsx"],
  },
]
