import eslintConfigSCNext from "eslint-config-sc-next"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  ...eslintConfigSCNext.configs.recommended,
  {
    files: ["**/*.jsx"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
  eslintConfigPrettier,
]
