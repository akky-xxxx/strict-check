# [eslint-config-sc-jest](https://strict-check-series.pages.dev/packages/eslint-config-sc-jest)
- Strict Check config for eslint.
- For Jest.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-jest
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigSCJest from "eslint-config-sc-jest"

export default [
  [/* other rules for product code */],
  eslintConfigSCJest.configs.recommended,
].flat()

// Below is equal
export default [
  [/* other rules for product code */],
  eslintConfigSCJest.configs.jestPluginRecords,
  eslintConfigSCJest.configs.customRecord,
  eslintConfigSCJest.configs.overrideJavascriptRecord, // for javascript project
  eslintConfigSCJest.configs.overrideTypescriptRecord, // for typecript project
].flat()
```

## Used config, plugin ( alphabetical )
### plugin
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

## License
- [MIT](LICENSE)
