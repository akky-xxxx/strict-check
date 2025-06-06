# [eslint-config-sc-storybook](https://strict-check-series.pages.dev/packages/eslint-config-sc-storybook)
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
  [/* other rules for product code */],
  eslintConfigSCStorybook.configs.recommended,
].flat()

// Below is equal
export default [
  [/* other rules for product code */],
  eslintConfigSCStorybook.configs.storybookConfigRecords,
  eslintConfigSCStorybook.configs.overrideJavascriptRecord, // for javascript project
  eslintConfigSCStorybook.configs.overrideTypescriptRecord, // for typecript project
].flat()
```

## Used config, plugin ( alphabetical )
### plugin
- [eslint-plugin-storybook](https://www.npmjs.com/package/eslint-plugin-storybook)

## License
- [MIT](LICENSE)
