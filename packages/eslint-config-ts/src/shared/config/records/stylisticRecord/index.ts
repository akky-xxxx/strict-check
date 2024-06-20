import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...eslintConfigSCJs.configs.stylisticRecord,
} as const satisfies EslintFlatConfig
