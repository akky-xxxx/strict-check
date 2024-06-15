# eslint-config-sc-react
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
  ...eslintConfigSCReact.configs.baseRecords1,
  ...eslintConfigSCReact.configs.baseRecords2,

  // This is the custom config of eslint-config-sc-react
  ...eslintConfigSCReact.configs.customRecords,

  // This is the reset config for stylistic
  ...eslintConfigSCReact.configs.resetRecordsForStylistic,
]
```

#### For Typescript
```javascript
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCTs.configs.baseRecords1,
  ...eslintConfigSCReact.configs.baseRecords2,
  ...eslintConfigSCReact.configs.customRecords,
  ...eslintConfigSCReact.configs.customRecordsWithTypescript, // This is the custom config for typescript of eslint-config-sc-react
  ...eslintConfigSCReact.configs.resetRecordsForStylistic,
]
```


### Use for `.eslintrc.js`
#### For Javascript

```javascript
// .eslintrc.js

module.exports = {
  extends: ["sc-react/legacy"]
}

// Below is equal
const eslintConfigSCReact = require("eslint-config-sc-react")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  rules: {
    ...eslintConfigSCReact.configs.customRecords[0].rules,
    ...eslintConfigSCReact.configs.resetRecordsForStylistic[0].rules,
  },
}
```

#### For Typescript
```javascript
const eslintConfigSCReact = require("eslint-config-sc-react")
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  rules: {
    ...eslintConfigSCReact.configs.customRecords[0].rules,
    ...eslintConfigSCReact.configs.customRecords[1].rules,
    ...eslintConfigSCReact.configs.customRecordsWithTypescript[0].rules,  // This is the custom config for typescript of eslint-config-sc-react
    ...eslintConfigSCTs.configs.customRecords[0].rules,
    ...eslintConfigSCReact.configs.resetRecordsForStylistic[0].rules,
  },
}
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-sc-js](https://www.npmjs.com/package/eslint-config-sc-js)

### plugin
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hook](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
