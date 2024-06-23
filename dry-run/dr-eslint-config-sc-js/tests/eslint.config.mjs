import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  eslintConfigSCJs.configs.recommended,
  {
    files: ["**/*.js"],
  },
].flat()
