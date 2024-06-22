import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbRecords = [
  ...eslintConfigSCReact.configs.airbnbRecords,
] as const satisfies EslintFlatConfig[]
