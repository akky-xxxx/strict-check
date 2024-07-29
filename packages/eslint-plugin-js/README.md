# [eslint-plugin-sc-js](https://strict-check-series.pages.dev/packages/eslint-plugin-sc-js)
- Strict Check rules for eslint.
- - For Javascript / Typescript.

## Installation

```shell
# by yarn
$ yarn add -D eslint-plugin-sc-js

# by npm
$ npm i --save-dev eslint-plugin-sc-js
```

## Usage

### for `eslint.config.mjs`
```js
import eslintPluginSCJs from "eslint-plugin-sc-js"

export default [
  {
    plugins: {
      "js": eslintPluginSCJs, // It is not necessary when use the recommended config
    },
  },
  eslintPluginSCJs.configs.recommended,
]
```

### for `.eslintrc.js`

```js
module.exports = {
  plugins: ["sc-js"], // It is not necessary when use the recommended config
  extends: [
    "plugin:sc-js/legacy"
  ],
  rules: {
    ...
  },
}
```

## Rules

✅: Set in the recommended configuration.

| Name                                                                               | Description                                      | 💼 |
|------------------------------------------------------------------------------------|--------------------------------------------------|----|
| [file-path-patterns](docs/rules/file-path-patterns.md)                             | Check if file path follows regular expression    |    |
| [forbidden-multiple-named-exports](docs/rules/forbidden-multiple-named-exports.md) | Forbidden the multiple named exports at one file |    |
| [individual-import](docs/rules/individual-import.md)                               | Import them individual                           |    |
| [match-names-of-file-and-export](docs/rules/match-names-of-file-and-export.md)     | Match name of filename and export target         |    |
| [restrict-use-of-process-env](docs/rules/restrict-use-of-process-env.md)           | Restrict environment usage                       | ✅  |

## License
- [MIT](LICENSE)
