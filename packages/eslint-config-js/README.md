# eslint-config-sc-js
- Strict Check config for eslint.
- For Javascript.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-js
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  ...eslintConfigSCJs.configs.recommended,
]

// Below is equal
export default [
  eslintConfigSCJs.configs.initialRecord,
  eslintConfigSCJs.configs.stylisticRecord,
  eslintConfigSCJs.configs.eslintRecommendedRecord,
  ...eslintConfigSCJs.configs.unicornRecommendedRecords,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  ...eslintConfigSCJs.configs.airbnbBaseRecords,

  // This is the custom config of eslint-config-sc-js
  eslintConfigSCJs.configs.customRecord,

  // This is the reset config for @stylistic
  eslintConfigSCJs.configs.resetRecordForStylistic,
]
```

### Use for `.eslintrc.js`

```javascript
// .eslintrc.js
module.exports = {
  extends: ["sc-js/legacy"]
}

// Below is equal
const eslintConfigSCJs = require("eslint-config-sc-js")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigSCJs.configs.customRecord.rules,
    ...eslintConfigSCJs.configs.resetRecordForStylistic.rules,
  },
}
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)

### plugin
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
