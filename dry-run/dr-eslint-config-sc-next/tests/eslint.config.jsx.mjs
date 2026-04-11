import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  ...eslintConfigSCNext.configs.recommended,
  {
    files: ["**/*.jsx"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
]
