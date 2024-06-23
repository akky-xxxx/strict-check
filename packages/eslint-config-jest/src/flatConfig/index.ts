import { customRecord } from "../shared/config/records/customRecord"
import { eslintOverrideRecord } from "../shared/config/records/eslintOverrideRecord"
import { jestPluginRecords } from "../shared/config/records/jestPluginRecords"
import { overrideTypescriptRecord } from "../shared/config/records/overrideTypescriptRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  jestPluginRecords,
  customRecord,
  eslintOverrideRecord,
  overrideTypescriptRecord,
].flat() satisfies EslintFlatConfig[]
