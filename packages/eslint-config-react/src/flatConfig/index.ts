import { airbnbRecords } from "../shared/config/records/airbnbRecords"
import { customRecord } from "../shared/config/records/customRecord"
import { eslintRecommendedRecord } from "../shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "../shared/config/records/initialRecord"
import { reactRecords } from "../shared/config/records/reactRecords"
import { scJsCustomRecord } from "../shared/config/records/scJsCustomRecord"
import { unicornRecommendedRecords } from "../shared/config/records/unicornRecommendedRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  initialRecord,
  eslintRecommendedRecord,
  unicornRecommendedRecords,
  reactRecords,
  airbnbRecords,
  scJsCustomRecord,
  customRecord,
].flat() satisfies EslintFlatConfig[]
