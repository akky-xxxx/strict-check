import { eslintOverrideRecord } from "../shared/config/records/eslintOverrideRecord"
import { storybookConfigRecords } from "../shared/config/records/storybookConfigRecords"
import { overrideTypescriptRecord } from "../shared/config/records/overrideTypescriptRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  storybookConfigRecords,
  eslintOverrideRecord,
  overrideTypescriptRecord,
].flat() satisfies EslintFlatConfig[]
