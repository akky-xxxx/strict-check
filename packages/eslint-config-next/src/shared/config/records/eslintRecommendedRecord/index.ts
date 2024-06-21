import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslintConfigSCReact.configs.eslintRecommendedRecord,
} as const satisfies EslintFlatConfig
