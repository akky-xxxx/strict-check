# eslint-config-sc-storybook
- Strict Check config for eslint.
- For Storybook.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-storybook
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigSCStorybook from "eslint-config-sc-storybook"

export default [
  ...[/* other rules for product code */],
  ...eslintConfigSCStorybook.configs.recommended,
]

// Below is equal
export default [
  ...[/* other rules for product code */],
  ...eslintConfigSCStorybook.configs.storybookConfigRecords,
  eslintConfigSCStorybook.configs.eslintOverrideRecord, // for javascript project
  eslintConfigSCStorybook.configs.typescriptEslintOverrideRecord, // for typecript project
]
```

### Use for `.eslintrc.js`

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    "...", // other extends for product code
    "sc-storybook/legacy",
  ]
}

// Below is equal
const eslintConfigSCStorybook = require("eslint-config-sc-storybook")

module.exports = {
  extends: [
    "...", // other extends for product code
  ],
  plguins: ["storybook"],
  overrides: [
    ...[/* other overrides */],
    ...eslintConfigSCStorybook.configs.legacy.overrides,
  ],
}
```

## Used config, plugin ( alphabetical )
### plugin
- [eslint-plugin-storybook](https://www.npmjs.com/package/eslint-plugin-storybook)

## License
- [MIT](LICENSE)
