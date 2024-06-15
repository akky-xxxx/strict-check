import { baseRecords } from "../shared/config/records/baseRecords"
import { customRecords } from "../shared/config/records/customRecords"
import { customRecordsWithTypescript } from "../shared/config/records/customRecordsWithTypescript"
import { resetRecordsForStylistic } from "../shared/config/records/resetRecordsForStylistic"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...baseRecords,
  ...customRecords,
  ...customRecordsWithTypescript,
  ...resetRecordsForStylistic,
] as const satisfies EslintFlatConfig[]
