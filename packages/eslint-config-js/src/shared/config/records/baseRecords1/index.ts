import { eslintRecommendedRecord } from "../eslintRecommendedRecord"
import { initialRecord } from "../initialRecord"
import { stylisticRecord } from "../stylisticRecord"
import { unicornRecommendedRecords } from "../unicornRecommendedRecords"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.7 以降で削除
export const baseRecords1 = [
  initialRecord,
  stylisticRecord,
  eslintRecommendedRecord,
  ...unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
