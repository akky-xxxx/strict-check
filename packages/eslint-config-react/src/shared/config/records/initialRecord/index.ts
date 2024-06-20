import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCJs.configs.initialRecord,
} as const satisfies EslintFlatConfig
