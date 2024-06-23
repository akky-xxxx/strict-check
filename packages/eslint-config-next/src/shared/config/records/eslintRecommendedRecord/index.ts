import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslintConfigSCReact.configs.eslintRecommendedRecord,
  name: `${PACKAGE_NAME}/eslintRecommendedRecord`,
} as const satisfies EslintFlatConfig
