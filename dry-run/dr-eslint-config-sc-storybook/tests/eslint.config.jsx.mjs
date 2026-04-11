import eslintConfigSCStorybook from "eslint-config-sc-storybook"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintConfigSCStorybook.configs.recommended,
  {
    files: ["**/*.jsx"],
  },
  eslintConfigPrettier,
].flat()
