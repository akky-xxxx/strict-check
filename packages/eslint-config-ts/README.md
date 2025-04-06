
# [eslint-config-sc-ts](https://strict-check-series.pages.dev/packages/eslint-config-sc-ts)
- Strict Check config for eslint.
- For Typescript.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-ts
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  eslintConfigSCTs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "/path/to/tsconfig.json", // default, refer <root>/tsoncifg.json
      },
    },
  },
].flat()

// Below is equal
export default [
  eslintConfigSCTs.configs.initialRecord,
  eslintConfigSCTs.configs.stylisticRecord,
  eslintConfigSCTs.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.unicornRecommendedRecords,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  eslintConfigSCTs.configs.airbnbBaseRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-ts
  eslintConfigSCTs.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecord,

  // This is the reset config for stylistic
  eslintConfigSCTs.configs.resetRecordForStylistic,
  {
    languageOptions: {
      parserOptions: {
        project: "/path/to/tsconfig.json", // default, refer <root>/tsoncifg.json
      },
    },
  },
].flat()
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-sc-js](https://www.npmjs.com/package/eslint-config-sc-js)

### plugin
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
