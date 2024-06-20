import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  ...eslintConfigSCJs.configs.unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
