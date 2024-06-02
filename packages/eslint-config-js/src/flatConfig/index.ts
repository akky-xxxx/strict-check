import { baseRecords1 } from "../shared/config/records/baseRecords1"
import { baseRecords2 } from "../shared/config/records/baseRecords2"
import { baseRecords3 } from "../shared/config/records/baseRecords3"
import { customRecords } from "../shared/config/records/customRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  ...baseRecords1,
  ...baseRecords2,
  ...baseRecords3,
  ...customRecords,
] as const satisfies EslintFlatConfig[]
