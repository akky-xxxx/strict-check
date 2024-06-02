# @strict/eslint-config-js
- Strict config for eslint.
- For Javascript.

## How to use
### Installation

```shell
$ yarn add -D @strict/eslint-config-js
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigStrictJs from "@strict/eslint-config-js"

export default [
  ...eslintConfigStrictJs.configs.recommended,
]

// Below is equal
export default [
  ...eslintConfigStrictJs.configs.baseRecords1,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  ...eslintConfigStrictJs.configs.baseRecords2,

  // This use eslint-config-prettier
  // This will delete in the future
  ...eslintConfigStrictJs.configs.baseRecords3,

  // This is the scustom config of @strict/eslint-config-js
  ...eslintConfigStrictJs.configs.customRecords,
]
```

### Use for `.eslintrc.js`

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@strict/js"]
}

// Below is equal
const eslintConfigJs = require("@strict/eslint-config-js")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
    "prettier"
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigJs.configs.customRecords[0].rules,
  },
}
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

### plugin
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
