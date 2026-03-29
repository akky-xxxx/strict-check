import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"

// cjs 形式のため
// eslint-disable-next-line @typescript-eslint/no-require-imports
const eslintPluginJsxA11y = require("eslint-plugin-jsx-a11y")

const JSX_INDENT_SPACES = 2

const scJsAirbnbBaseRecords = eslintConfigSCJs.configs.airbnbBaseRecords.map(
  (record: EslintFlatConfig, index: number) => ({
    ...record,
    name: `eslint-config-sc-react/airbnbRecords/scJsAirbnbBaseRecord${index}`,
  }),
)

export const airbnbReplacementRecords = [
  ...scJsAirbnbBaseRecords,
  {
    ...eslintConfigSCJs.configs.importRecommendedRecord,
    name: "eslint-config-sc-react/airbnbRecords/importRecommendedRecord",
  },
  {
    ...eslintPluginJsxA11y.flatConfigs.recommended,
    name: "eslint-config-sc-react/airbnbRecords/jsxA11yRecommendedRecord",
    plugins: {
      "jsx-a11y": eslintPluginJsxA11y,
    },
  },
  {
    name: "eslint-config-sc-react/airbnbRecords/reactRulesRecord",
    rules: {
      "react/jsx-indent": ["error", JSX_INDENT_SPACES],
      "react/jsx-props-no-spreading": [
        "error",
        {
          custom: "enforce",
          exceptions: [],
          explicitSpread: "ignore",
          html: "enforce",
        },
      ],
    },
  },
] as const satisfies EslintFlatConfig[]
