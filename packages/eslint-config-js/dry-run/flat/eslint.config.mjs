import plugin from "../../dist/index.js"

export default [
  ...plugin.configs.recommended,
  {
    files: ["*.js"],
  },
]
