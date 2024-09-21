# [eslint-config-sc-react](https://strict-check-series.pages.dev/packages/eslint-config-sc-react)
- Strict Check config for eslint.
- For ReactJS.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-react
```

### Use for `eslint.config.mjs`
#### For Javascript

```javascript
// eslint.config.mjs
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCReact.configs.recommended,
]

// Below is equal
export default [
  eslintConfigSCReact.configs.initialRecord,
  eslintConfigSCReact.configs.stylisticRecord,
  eslintConfigSCReact.configs.eslintRecommendedRecord,
  eslintConfigSCReact.configs.unicornRecommendedRecords,
  eslintConfigSCReact.configs.reactRecords,
  eslintConfigSCReact.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-react
  eslintConfigSCReact.configs.scJsCustomRecord,
  eslintConfigSCReact.configs.customRecord,

  // This is the reset config for stylistic
  eslintConfigSCReact.configs.resetRecordForStylistic,
].flat()
```

#### For Typescript
```javascript
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  eslintConfigSCReact.configs.initialRecord,
  eslintConfigSCReact.configs.stylisticRecord,
  eslintConfigSCReact.configs.eslintRecommendedRecord,
  eslintConfigSCReact.configs.unicornRecommendedRecords,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,
  eslintConfigSCReact.configs.reactRecords,
  eslintConfigSCReact.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-react
  eslintConfigSCReact.configs.scJsCustomRecord,
  eslintConfigSCReact.configs.customRecord,
  eslintConfigSCReact.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCReact.configs.resetRecordForStylistic,
].flat()
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-sc-js](https://www.npmjs.com/package/eslint-config-sc-js)


## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
