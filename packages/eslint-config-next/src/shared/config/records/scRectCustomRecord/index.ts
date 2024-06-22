import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scRectCustomRecord = {
  ...eslintConfigSCReact.configs.customRecord,
  name: `${PACKAGE_NAME}/scRectCustomRecord`,
} as const satisfies EslintFlatConfig
