import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
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

    baseRecords,

    customRecords,
    customRecordsWithTypescript,
  },
} as const satisfies ESLint.Plugin

export = plugin
