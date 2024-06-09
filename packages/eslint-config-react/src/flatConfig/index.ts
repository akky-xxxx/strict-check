import { baseRecords1 } from "../shared/config/records/baseRecords1"
import { customRecords } from "../shared/config/records/customRecords"
import { customRecordsWithTypescript } from "../shared/config/records/customRecordsWithTypescript"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...baseRecords1,
  ...customRecords,
  ...customRecordsWithTypescript,
] as const satisfies EslintFlatConfig[]
