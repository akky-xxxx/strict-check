import { customRecord } from "../customRecord"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecords = [
  customRecord,
] as const satisfies EslintFlatConfig[]
