import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  {
    name: `${PACKAGE_NAME}/unicornRecommendedRecords`,
  },
  ...eslintConfigSCReact.configs.unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
