import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scJsCustomRecord = {
  ...eslintConfigSCReact.configs.scJsCustomRecord,
  name: `${PACKAGE_NAME}/scJsCustomRecord`,
} as const satisfies EslintFlatConfig
