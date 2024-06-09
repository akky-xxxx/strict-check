import plugin from "../../dist/index.js"

export default [
  ...plugin.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
    files: ["*.js"],
  },
]
