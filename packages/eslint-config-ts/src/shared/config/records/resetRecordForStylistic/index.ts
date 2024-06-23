import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  ...eslintConfigSCJs.configs.resetRecordForStylistic,
  name: `${PACKAGE_NAME}/resetRecordForStylistic`,
} as const satisfies EslintFlatConfig
