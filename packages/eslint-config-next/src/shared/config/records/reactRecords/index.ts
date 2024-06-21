import eslintConfigSCReact from "eslint-config-sc-react"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const reactRecords = [
  ...eslintConfigSCReact.configs.reactRecords,
] as const satisfies EslintFlatConfig[]
