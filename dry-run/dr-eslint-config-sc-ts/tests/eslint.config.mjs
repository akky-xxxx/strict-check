import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  ...eslintConfigSCTs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
    },
    files: ["**/*.ts"],
  },
]
