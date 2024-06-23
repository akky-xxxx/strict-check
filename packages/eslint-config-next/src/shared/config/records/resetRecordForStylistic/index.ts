import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  ...eslintConfigSCReact.configs.resetRecordForStylistic,
  name: `${PACKAGE_NAME}/resetRecordForStylistic`,
} as const satisfies EslintFlatConfig
