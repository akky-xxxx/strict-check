import { overrideJavascriptRecord } from "../shared/config/records/overrideJavascriptRecord"
import { storybookConfigRecords } from "../shared/config/records/storybookConfigRecords"
import { overrideTypescriptRecord } from "../shared/config/records/overrideTypescriptRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  storybookConfigRecords,
  overrideJavascriptRecord,
  overrideTypescriptRecord,
].flat() satisfies EslintFlatConfig[]
