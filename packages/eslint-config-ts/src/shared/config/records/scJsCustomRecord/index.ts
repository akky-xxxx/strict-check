import eslintConfigSCJs from "eslint-config-sc-js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scJsCustomRecord = {
  ...eslintConfigSCJs.configs.customRecord,
} as const satisfies EslintFlatConfig
