import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { baseRecords3 } from "./shared/config/records/baseRecords3"
import { customRecords1 } from "./shared/config/records/customRecords1"
import { customRecords2 } from "./shared/config/records/customRecords2"

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

    customRecords1,
    customRecords2,
  },
} as const satisfies ESLint.Plugin

export = plugin
