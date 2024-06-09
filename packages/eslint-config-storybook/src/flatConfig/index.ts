import { baseRecords } from "../shared/config/records/baseRecords"
import { eslintOverrideRecords } from "../shared/config/records/eslintOverrideRecords"
import { typescriptEslintOverrideRecords } from "../shared/config/records/typescriptEslintOverrideRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...baseRecords,
  ...eslintOverrideRecords,
  ...typescriptEslintOverrideRecords,
] as const satisfies EslintFlatConfig[]
