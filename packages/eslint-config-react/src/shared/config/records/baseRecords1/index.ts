import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords1 = [
  ...eslintConfigSCJs.configs.baseRecords1,
] as const satisfies EslintFlatConfig[]
