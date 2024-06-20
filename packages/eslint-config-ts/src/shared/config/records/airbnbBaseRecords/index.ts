import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  ...eslintConfigSCJs.configs.airbnbBaseRecords,
] as const satisfies EslintFlatConfig[]
