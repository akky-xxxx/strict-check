import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scRectCustomRecord = {
  ...eslintConfigSCReact.configs.customRecord,
} as const satisfies EslintFlatConfig
