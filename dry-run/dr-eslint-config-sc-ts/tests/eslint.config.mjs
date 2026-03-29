import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  eslintConfigSCTs.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "off",
    },
  },
].flat()
