import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  ...eslintConfigSCJs.configs.resetRecordForStylistic,
} as const satisfies EslintFlatConfig
