import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { customRecords } from "./shared/config/records/customRecords"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
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
  },
} as const satisfies Plugin

export = plugin
