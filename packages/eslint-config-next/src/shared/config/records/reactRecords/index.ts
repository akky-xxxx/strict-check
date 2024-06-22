import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const reactRecords = [
  {
    name: `${PACKAGE_NAME}/reactRecords`,
  },
  ...eslintConfigSCReact.configs.reactRecords,
] as const satisfies EslintFlatConfig[]
