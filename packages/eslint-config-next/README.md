# [eslint-config-sc-next](https://strict-check-series.pages.dev/packages/eslint-config-sc-next)
- Strict Check config for eslint.
- For NextJS.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-next
```

### Use for `eslint.config.mjs`
#### For Javascript

```javascript
// eslint.config.mjs
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.recommended,
].flat()

// Below is equal
export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.stylisticRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecords,
  eslintConfigSCNext.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-next
  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCNext.configs.scRectCustomRecord,
  eslintConfigSCNext.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCNext.configs.resetRecordForStylistic,
].flat()
```

#### For Typescript
```javascript
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.stylisticRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecords,
  eslintConfigSCNext.configs.airbnbRecords,

  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecords,
  eslintConfigSCNext.configs.customRecord,
  eslintConfigSCNext.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCNext.configs.resetRecordForStylistic,
].flat()
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-sc-react](https://www.npmjs.com/package/eslint-config-sc-react)


## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
