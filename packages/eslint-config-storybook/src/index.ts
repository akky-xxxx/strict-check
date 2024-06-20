import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { eslintOverrideRecord } from "./shared/config/records/eslintOverrideRecord"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
import { storybookConfigRecords } from "./shared/config/records/storybookConfigRecords"
import { typescriptEslintOverrideRecord } from "./shared/config/records/typescriptEslintOverrideRecord"
import { typescriptEslintOverrideRecords } from "./shared/config/records/typescriptEslintOverrideRecords"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "eslint-config-sc-storybook",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    baseRecords,

    eslintOverrideRecords,
    typescriptEslintOverrideRecords,

    storybookConfigRecords,

    eslintOverrideRecord,
    typescriptEslintOverrideRecord,
  },
} as const satisfies Plugin

export = plugin
