import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordsForStylistic = [
  ...eslintConfigSCJs.configs.resetRecordsForStylistic,
] as const satisfies EslintFlatConfig[]
