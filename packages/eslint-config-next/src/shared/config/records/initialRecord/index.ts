import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCReact.configs.initialRecord,
  name: `${PACKAGE_NAME}/initialRecord`,
} as const satisfies EslintFlatConfig
