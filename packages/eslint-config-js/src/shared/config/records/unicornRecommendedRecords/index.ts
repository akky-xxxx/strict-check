// eslint-disable-next-line import/no-unresolved
import eslintPluginUnicorn from "eslint-plugin-unicorn"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  {
    name: `${PACKAGE_NAME}/unicornRecommendedRecords`,
  },
  eslintPluginUnicorn.configs.recommended,
] as const satisfies EslintFlatConfig[]
