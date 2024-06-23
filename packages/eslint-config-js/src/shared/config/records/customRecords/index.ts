import { customRecord } from "../customRecord"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.7 以降で削除
export const customRecords = [
  customRecord,
] as const satisfies EslintFlatConfig[]
