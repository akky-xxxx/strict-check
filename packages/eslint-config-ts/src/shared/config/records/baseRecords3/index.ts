import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords3 = [
  ...eslintConfigSCJs.configs.baseRecords2,
] as const satisfies EslintFlatConfig[]
