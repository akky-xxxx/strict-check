import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  {
    name: `${PACKAGE_NAME}/unicornRecommendedRecords`,
  },
  ...eslintConfigSCJs.configs.unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
