import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.3 以降で削除
export const baseRecords1 = [
  ...eslintConfigSCJs.configs.baseRecords1,
] as const satisfies EslintFlatConfig[]
