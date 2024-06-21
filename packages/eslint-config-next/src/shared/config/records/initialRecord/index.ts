import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCReact.configs.initialRecord,
} as const satisfies EslintFlatConfig
