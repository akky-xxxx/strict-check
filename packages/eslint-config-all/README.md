# eslint-config-sc-all
- Strict Check config for eslint.
- Use different config of sc series.
  - [eslint-config-sc-js](https://www.npmjs.com/package/eslint-config-sc-js)
  - [eslint-config-sc-ts](https://www.npmjs.com/package/eslint-config-sc-ts)
  - [eslint-config-sc-jest](https://www.npmjs.com/package/eslint-config-sc-jest)
  - [eslint-config-sc-react](https://www.npmjs.com/package/eslint-config-sc-react)
  - [eslint-config-sc-next](https://www.npmjs.com/package/eslint-config-sc-next)
  - [eslint-config-sc-storybook](https://www.npmjs.com/package/eslint-config-sc-storybook)

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-all
```

```javascript
// eslint.config.mjs
import eslintConfigSC from "eslint-config-sc"

export default [
  eslintConfigSC.getConfigs("typescript", ["react", "next", "jest", "storybook"]),
].flat()

```

### Arguments
- First (required) - string
  - `javascript` | `typescript`
- Second (optional) - string array
  - `jest`
  - `next`
  - `react`
  - `storybook`

### Attention
- It varies the dependencies by arguments.

## License
- [MIT](LICENSE)
- This includes the work that is distributed in the Apache License 2.0.
