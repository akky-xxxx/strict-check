import { customRecord } from "../shared/config/records/customRecord"
import { jestPluginRecords } from "../shared/config/records/jestPluginRecords"
import { overrideJavascriptRecord } from "../shared/config/records/overrideJavascriptRecord"
import { overrideTypescriptRecord } from "../shared/config/records/overrideTypescriptRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  jestPluginRecords,
  customRecord,
  overrideJavascriptRecord,
  overrideTypescriptRecord,
].flat() satisfies EslintFlatConfig[]
