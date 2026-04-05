import { airbnbBaseRecords } from "../shared/config/records/airbnbBaseRecords"
import { customRecord } from "../shared/config/records/customRecord"
import { eslintRecommendedRecord } from "../shared/config/records/eslintRecommendedRecord"
import { importRecommendedRecord } from "../shared/config/records/importRecommendedRecord"
import { initialRecord } from "../shared/config/records/initialRecord"
import { unicornRecommendedRecords } from "../shared/config/records/unicornRecommendedRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  initialRecord,
  importRecommendedRecord,
  eslintRecommendedRecord,
  unicornRecommendedRecords,
  airbnbBaseRecords,
  customRecord,
].flat() satisfies EslintFlatConfig[]
