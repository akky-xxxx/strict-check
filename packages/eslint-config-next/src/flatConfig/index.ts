import { airbnbRecords } from "../shared/config/records/airbnbRecords"
import { eslintRecommendedRecord } from "../shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "../shared/config/records/initialRecord"
import { nextRecord } from "../shared/config/records/nextRecord"
import { reactRecords } from "../shared/config/records/reactRecords"
import { resetRecordForStylistic } from "../shared/config/records/resetRecordForStylistic"
import { scJsCustomRecord } from "../shared/config/records/scJsCustomRecord"
import { scRectCustomRecord } from "../shared/config/records/scRectCustomRecord"
import { stylisticRecord } from "../shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "../shared/config/records/unicornRecommendedRecords"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  initialRecord,
  stylisticRecord,
  eslintRecommendedRecord,
  unicornRecommendedRecords,
  reactRecords,
  nextRecord,
  airbnbRecords,
  scJsCustomRecord,
  scRectCustomRecord,
  resetRecordForStylistic,
].flat() satisfies EslintFlatConfig[]
