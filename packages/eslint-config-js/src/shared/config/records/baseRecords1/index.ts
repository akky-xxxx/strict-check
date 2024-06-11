import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"

import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"
import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords1 = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: SEVERITY.ERROR,
    },
  },
  stylistic.configs["recommended-flat"],
  eslint.configs.recommended,
  ...getCompatExtends("plugin:unicorn/recommended"),
] as const satisfies EslintFlatConfig[]
