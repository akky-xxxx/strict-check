import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scRectCustomRecordWithTypescript = {
  ...eslintConfigSCReact.configs.customRecordWithTypescript,
  name: `${PACKAGE_NAME}/scRectCustomRecordWithTypescript`,
} as const satisfies EslintFlatConfig
