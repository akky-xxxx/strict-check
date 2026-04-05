import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStyle = {
  ...eslintConfigSCJs.configs.resetRecordForStyle,
  name: `${PACKAGE_NAME}/resetRecordForStyle`,
} as const satisfies EslintFlatConfig
