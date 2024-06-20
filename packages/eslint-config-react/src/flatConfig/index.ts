import { airbnbRecords } from "../shared/config/records/airbnbRecords"
import { customRecord } from "../shared/config/records/customRecord"
import { customRecordWithTypescript } from "../shared/config/records/customRecordWithTypescript"
import { eslintRecommendedRecord } from "../shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "../shared/config/records/initialRecord"
import { reactRecords } from "../shared/config/records/reactRecords"
import { resetRecordForStylistic } from "../shared/config/records/resetRecordForStylistic"
import { scJsCustomRecord } from "../shared/config/records/scJsCustomRecord"
import { stylisticRecord } from "../shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "../shared/config/records/unicornRecommendedRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  initialRecord,
  stylisticRecord,
  eslintRecommendedRecord,
  ...unicornRecommendedRecords,
  ...reactRecords,
  ...airbnbRecords,
  scJsCustomRecord,
  customRecord,
  customRecordWithTypescript,
  resetRecordForStylistic,
] as const satisfies EslintFlatConfig[]
