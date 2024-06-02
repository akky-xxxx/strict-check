const legacyConfig = require("../../dist/legacy")

module.exports = {
  ...legacyConfig,
  reportUnusedDisableDirectives: true,
}
