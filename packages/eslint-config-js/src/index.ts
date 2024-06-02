import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { baseRecords3 } from "./shared/config/records/baseRecords3"
import { customRecords } from "./shared/config/records/customRecords"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "eslint-config-sc-js",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords1,
    baseRecords2,
    baseRecords3,

    customRecords,
  },
} as const satisfies ESLint.Plugin

export = plugin
