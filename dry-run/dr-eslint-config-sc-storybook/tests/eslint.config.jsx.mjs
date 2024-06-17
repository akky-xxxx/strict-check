import eslintConfigSCStorybook from "eslint-config-sc-storybook"

export default [
  ...eslintConfigSCStorybook.configs.recommended,
  {
    files: ["**/*.jsx"],
  },
]
