import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const baseRecords2 = [
  ...eslintConfigSCJs.configs.baseRecords2,
] as const satisfies EslintFlatConfig[]
