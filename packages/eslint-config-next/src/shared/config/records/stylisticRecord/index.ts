import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...eslintConfigSCReact.configs.stylisticRecord,
} as const satisfies EslintFlatConfig
