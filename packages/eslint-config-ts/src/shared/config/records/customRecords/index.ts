import eslintConfigSCJs from "eslint-config-sc-js"

import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const customRecords = [
  ...eslintConfigSCJs.configs.customRecords,
  {
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
