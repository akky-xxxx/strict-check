import { eslintRecommendedRecord } from "../eslintRecommendedRecord"
import { initialRecord } from "../initialRecord"
import { stylisticRecord } from "../stylisticRecord"
import { unicornRecommendedRecords } from "../unicornRecommendedRecords"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords1 = [
  initialRecord,
  stylisticRecord,
  eslintRecommendedRecord,
  ...unicornRecommendedRecords,
] as const satisfies EslintFlatConfig[]
