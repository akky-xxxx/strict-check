import stylistic from "@stylistic/eslint-plugin"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...stylistic.configs["recommended-flat"],
} as const satisfies EslintFlatConfig
