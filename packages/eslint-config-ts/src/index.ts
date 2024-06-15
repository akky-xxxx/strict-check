import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { baseRecords3 } from "./shared/config/records/baseRecords3"
import { customRecords } from "./shared/config/records/customRecords"
import { resetRecordsForStylistic } from "./shared/config/records/resetRecordsForStylistic"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "@strict/eslint-config-ts",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords1,
    baseRecords2,
    baseRecords3,

    customRecords,
    resetRecordsForStylistic,
  },
} as const satisfies ESLint.Plugin

export = plugin
