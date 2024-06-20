import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecords } from "./shared/config/records/customRecords"
import { eslintOverrideRecord } from "./shared/config/records/eslintOverrideRecord"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
import { jestPluginRecords } from "./shared/config/records/jestPluginRecords"
import { typescriptEslintOverrideRecord } from "./shared/config/records/typescriptEslintOverrideRecord"
import { typescriptEslintOverrideRecords } from "./shared/config/records/typescriptEslintOverrideRecords"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "eslint-config-sc-jest",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords,

    customRecords,

    eslintOverrideRecords,
    typescriptEslintOverrideRecords,

    jestPluginRecords,

    customRecord,
    eslintOverrideRecord,
    typescriptEslintOverrideRecord,
  },
} as const satisfies Plugin

export = plugin
