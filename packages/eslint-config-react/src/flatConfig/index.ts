import { baseRecords } from "../shared/config/records/baseRecords"
import { customRecords } from "../shared/config/records/customRecords"
import { customRecordsWithTypescript } from "../shared/config/records/customRecordsWithTypescript"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...baseRecords,
  ...customRecords,
  ...customRecordsWithTypescript,
] as const satisfies EslintFlatConfig[]
