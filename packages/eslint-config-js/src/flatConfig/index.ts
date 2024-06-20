import { airbnbBaseRecords } from "../shared/config/records/airbnbBaseRecords"
import { customRecord } from "../shared/config/records/customRecord"
import { eslintRecommendedRecord } from "../shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "../shared/config/records/initialRecord"
import { resetRecordForStylistic } from "../shared/config/records/resetRecordForStylistic"
import { stylisticRecord } from "../shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "../shared/config/records/unicornRecommendedRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  initialRecord,
  stylisticRecord,
  eslintRecommendedRecord,
  ...unicornRecommendedRecords,
  ...airbnbBaseRecords,
  customRecord,
  resetRecordForStylistic,
] as const satisfies EslintFlatConfig[]
