import plugin from "../../dist/index.js"

export default [
  ...plugin.configs.recommended,
  {
    ignores: ["**/eslint.config.mjs"],
  },
]
