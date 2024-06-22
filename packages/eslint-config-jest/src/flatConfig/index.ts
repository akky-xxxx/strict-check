import { customRecord } from "../shared/config/records/customRecord"
import { eslintOverrideRecord } from "../shared/config/records/eslintOverrideRecord"
import { jestPluginRecords } from "../shared/config/records/jestPluginRecords"
import { typescriptEslintOverrideRecord } from "../shared/config/records/typescriptEslintOverrideRecord"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"

export const flatConfig = [
  jestPluginRecords,
  customRecord,
  eslintOverrideRecord,
  typescriptEslintOverrideRecord,
].flat() satisfies EslintFlatConfig[]
