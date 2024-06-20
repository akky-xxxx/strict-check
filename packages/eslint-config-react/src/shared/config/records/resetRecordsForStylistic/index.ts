import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.3 以降で削除
export const resetRecordsForStylistic = [
  ...eslintConfigSCJs.configs.resetRecordsForStylistic,
] as const satisfies EslintFlatConfig[]
