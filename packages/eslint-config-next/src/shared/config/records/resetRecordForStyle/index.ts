import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStyle = {
  ...eslintConfigSCReact.configs.resetRecordForStyle,
  name: `${PACKAGE_NAME}/resetRecordForStyle`,
} as const satisfies EslintFlatConfig
