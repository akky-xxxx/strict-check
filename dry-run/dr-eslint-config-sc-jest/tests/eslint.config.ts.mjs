import eslintConfigSCJest from "eslint-config-sc-jest"
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintConfigSCTs.configs.recommended,
  eslintConfigSCJest.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
    },
  },
  {
    files: ["**/*.ts{,x}"],
  },
  eslintConfigPrettier,
].flat()
