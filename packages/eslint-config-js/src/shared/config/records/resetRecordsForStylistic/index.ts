import { resetRecordForStylistic } from "../resetRecordForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordsForStylistic = [
  resetRecordForStylistic,
] as const satisfies EslintFlatConfig[]
