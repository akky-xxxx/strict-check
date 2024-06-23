import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslintConfigSCJs.configs.eslintRecommendedRecord,
  name: `${PACKAGE_NAME}/eslintRecommendedRecord`,
} as const satisfies EslintFlatConfig
