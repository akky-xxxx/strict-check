import eslintConfigSCReact from "eslint-config-sc-react"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintConfigSCReact.configs.recommended,
  {
    files: ["**/*.jsx"],
  },
  eslintConfigPrettier,
].flat()
