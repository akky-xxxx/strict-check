import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { customRecords } from "./shared/config/records/customRecords"
import { customRecordsWithTypescript } from "./shared/config/records/customRecordsWithTypescript"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "@strict/eslint-config-react",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords1,
    baseRecords2,

    customRecords,
    customRecordsWithTypescript,
  },
} as const satisfies ESLint.Plugin

export = plugin
