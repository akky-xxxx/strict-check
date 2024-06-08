import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecords1 = [
  ...eslintConfigSCJs.configs.customRecords,
] as const satisfies EslintFlatConfig[]
