import { airbnbBaseRecords } from "../airbnbBaseRecords"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords2 = [
  ...airbnbBaseRecords,
] as const satisfies EslintFlatConfig[]
