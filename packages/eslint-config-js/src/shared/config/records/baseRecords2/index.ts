import { airbnbBaseRecords } from "../airbnbBaseRecords"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.7 以降で削除
export const baseRecords2 = [
  ...airbnbBaseRecords,
] as const satisfies EslintFlatConfig[]
