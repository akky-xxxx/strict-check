import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { customRecords } from "./shared/config/records/customRecords"
import { resetRecordsForStylistic } from "./shared/config/records/resetRecordsForStylistic"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "@strict/eslint-config-ts",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords1,
    baseRecords2,

    customRecords,
    resetRecordsForStylistic,
  },
} as const satisfies Plugin

export = plugin
