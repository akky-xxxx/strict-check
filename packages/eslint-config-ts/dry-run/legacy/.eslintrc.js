const legacyConfig = require("../../dist/legacy")

module.exports = {
  ...legacyConfig,
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  reportUnusedDisableDirectives: true,
}
