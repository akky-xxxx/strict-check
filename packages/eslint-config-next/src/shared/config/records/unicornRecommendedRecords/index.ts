import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  ...eslintConfigSCReact.configs.unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
