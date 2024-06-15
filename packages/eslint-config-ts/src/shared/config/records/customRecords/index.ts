import eslintConfigSCJs from "eslint-config-sc-js"

import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecords = [
  ...eslintConfigSCJs.configs.customRecords,
  {
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
