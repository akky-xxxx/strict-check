import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbReplacementRecords = [
  {
    ...eslintConfigSCJs.configs.importRecommendedRecord,
    name: "eslint-config-sc-react/airbnbRecords/importRecommendedRecord",
  },
] as const satisfies EslintFlatConfig[]
