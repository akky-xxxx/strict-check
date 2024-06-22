import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  eslintConfigSCReact.configs.recommended,
  {
    files: ["**/*.jsx"],
  },
].flat()
