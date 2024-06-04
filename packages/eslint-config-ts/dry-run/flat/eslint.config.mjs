import plugin from "../../dist/index.js"

export default [
  ...plugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/tsconfig.json",
      },
    },
  },
  {
    files: ["*.ts"],
  },
]
