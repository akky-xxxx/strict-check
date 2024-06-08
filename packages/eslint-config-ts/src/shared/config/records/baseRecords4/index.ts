import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords4 = [
  ...eslintConfigSCJs.configs.baseRecords3,
] as const satisfies EslintFlatConfig[]
