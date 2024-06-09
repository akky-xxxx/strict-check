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
  ...eslintConfigSCTs.configs.baseRecords1,
  ...eslintConfigSCTs.configs.baseRecords2,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  ...eslintConfigSCTs.configs.baseRecords3,

  // This is the scustom config of eslint-config-sc-ts
  ...eslintConfigSCTs.configs.customRecords1,
  ...eslintConfigSCTs.configs.customRecords2,
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
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigSCTs.configs.customRecords2[0].rules,
  },
}
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-config-sc-js](https://www.npmjs.com/package/eslint-config-sc-js)

### plugin
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
