import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scJsCustomRecord = {
  ...eslintConfigSCReact.configs.scJsCustomRecord,
} as const satisfies EslintFlatConfig
