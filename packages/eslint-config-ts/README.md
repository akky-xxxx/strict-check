# eslint-config-sc-ts
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
  ...eslintConfigSCTs.configs.recommended,
]

// Below is equal
export default [
  eslintConfigSCTs.configs.initialRecord,
  eslintConfigSCTs.configs.stylisticRecord,
  eslintConfigSCTs.configs.eslintRecommendedRecord,
  ...eslintConfigSCTs.configs.unicornRecommendedRecords,
  ...eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  ...eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  ...eslintConfigSCTs.configs.airbnbBaseRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-ts
  eslintConfigSCTs.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecord,

  // This is the reset config for stylistic
  eslintConfigSCTs.configs.resetRecordForStylistic,
]
```

### Use for `.eslintrc.js`

```javascript
// .eslintrc.js
module.exports = {
  extends: ["sc-ts/legacy"]
}

// Below is equal
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
    "airbnb-base",
    "sc-js/legacy"
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigSCTs.configs.customRecord.rules,
  },
}
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
