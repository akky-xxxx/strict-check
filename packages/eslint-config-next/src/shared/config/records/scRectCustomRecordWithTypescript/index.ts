import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scRectCustomRecordWithTypescript = {
  ...eslintConfigSCReact.configs.customRecordWithTypescript,
} as const satisfies EslintFlatConfig
