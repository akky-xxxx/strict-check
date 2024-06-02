// eslint-disable-next-line import/no-unresolved
import eslintConfigPrettier from "eslint-config-prettier"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords3 = [
  eslintConfigPrettier, // TODO: stylistic に委譲
] as const satisfies EslintFlatConfig[]
