import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { settings } from "../../settings"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const importRecommendedRecord = {
  ...eslintConfigSCJs.configs.importRecommendedRecord,
  name: `${PACKAGE_NAME}/importRecommendedRecord`,
  settings,
} as const satisfies EslintFlatConfig
