import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const promiseRecommendedRecord = {
  ...eslintConfigSCJs.configs.promiseRecommendedRecord,
  name: `${PACKAGE_NAME}/promiseRecommendedRecord`,
} as const satisfies EslintFlatConfig
