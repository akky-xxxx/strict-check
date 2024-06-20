import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslintConfigSCJs.configs.eslintRecommendedRecord,
} as const satisfies EslintFlatConfig
