import { resetRecordForStylistic } from "../resetRecordForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.7 以降で削除
export const resetRecordsForStylistic = [
  resetRecordForStylistic,
] as const satisfies EslintFlatConfig[]
