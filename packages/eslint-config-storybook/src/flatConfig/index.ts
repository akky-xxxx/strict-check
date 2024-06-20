import { eslintOverrideRecord } from "../shared/config/records/eslintOverrideRecord"
import { storybookConfigRecords } from "../shared/config/records/storybookConfigRecords"
import { typescriptEslintOverrideRecord } from "../shared/config/records/typescriptEslintOverrideRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...storybookConfigRecords,
  eslintOverrideRecord,
  typescriptEslintOverrideRecord,
] as const satisfies EslintFlatConfig[]
