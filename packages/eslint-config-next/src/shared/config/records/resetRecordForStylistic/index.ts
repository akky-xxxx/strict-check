import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  ...eslintConfigSCReact.configs.resetRecordForStylistic,
} as const satisfies EslintFlatConfig
