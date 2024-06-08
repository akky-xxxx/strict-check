# eslint-config-sc-react
- Strict Check config for eslint.
- For ReactJS.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-react
```

### Use for `eslint.config.mjs`

#### Recommended
Recommended use with `eslint-config-sc-ts` or `eslint-config-sc-js`<br>
Because, this package is only for react

```javascript
// eslint.config.mjs

// for typescript
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCTs.configs.baseRecords1, // extends for javascript
  ...eslintConfigSCTs.configs.baseRecords2, // extends for typescript
  ...eslintConfigSCReact.configs.baseRecords1, // exntends for react
  ...eslintConfigSCReact.configs.baseRecords2, // extends for prettier
  ...eslintConfigSCReact.configs.customRecords, // custom config for react x javascript
  ...eslintConfigSCReact.configs.customRecordsWithTypescript, // custom config for react x typescript
]

// for javascript
import eslintConfigSCJs from "eslint-config-sc-js"
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCJs.configs.baseRecords1, // extends for javascript
  ...eslintConfigSCReact.configs.baseRecords1, // exntends for react
  ...eslintConfigSCReact.configs.baseRecords2, // extends for prettier
  ...eslintConfigSCReact.configs.customRecords, // custom config for react
]
```

#### Only react rule
```javascript
// eslint.config.mjs
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCReact.configs.recommended,
]

// Below is equal
export default [
  ...eslintConfigSCReact.configs.baseRecords1,

  // This use eslint-config-prettier
  // This will delete in the future
  ...eslintConfigSCReact.configs.baseRecords2,

  // This is the custom config of eslint-config-sc-react
  ...eslintConfigSCReact.configs.customRecords,

  // This is the custom config of eslint-config-sc-react for typescript
  ...eslintConfigSCReact.configs.customRecordsWithTypescript,
]
```

### Use for `.eslintrc.js`

#### Recommended
Recommended use with `eslint-config-sc-ts` or `eslint-config-sc-js`<br>
Because, this package is only for react

```javascript
// .eslintrc.js

// for typescript
const eslintConfigSCReact = require("eslint-config-sc-react")
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "unicorn"],
  rules: {
    ...eslintConfigSCTs.configs.customRecords1[0].rules,
    ...eslintConfigSCTs.configs.customRecords2[0].rules,
    ...eslintConfigSCReact.configs.customRecords[0].rules,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        ...eslintConfigSCReact.configs.customRecordsWithTypescript[0].rules,
      },
    },
  ],
}
```

#### Only react rule

```javascript
// .eslintrc.js
module.exports = {
  extends: ["sc-react/legacy"]
}

// Below is equal
const eslintConfigSCReact = require("eslint-config-sc-react")

module.exports = {
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    ...eslintConfigSCReact.configs.customRecords[0].rules,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        ...eslintConfigSCReact.configs.customRecordsWithTypescript[0].rules,
      },
    },
  ],
}
```

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

### plugin
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hook](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
