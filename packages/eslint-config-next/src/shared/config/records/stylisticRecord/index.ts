import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...eslintConfigSCReact.configs.stylisticRecord,
  name: `${PACKAGE_NAME}/stylisticRecord`,
} as const satisfies EslintFlatConfig
