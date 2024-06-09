import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"

import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords1 = [
  {
    files: [
      "**/*.{js,jsx,mjs,cjs}",
      "**/*.{ts,tsx,mts,cts}",
    ],
  },
  stylistic.configs["recommended-flat"],
  eslint.configs.recommended,
  ...getCompatExtends("plugin:unicorn/recommended"),
] as const satisfies EslintFlatConfig[]
