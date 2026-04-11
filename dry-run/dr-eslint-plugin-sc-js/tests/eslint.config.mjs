import eslintPluginSCJs from "eslint-plugin-sc-js"

export default [
  eslintPluginSCJs.configs.recommended,
  {
    files: ["**/*.js"],
  },
]
