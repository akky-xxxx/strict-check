import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
import { typescriptEslintOverrideRecords } from "./shared/config/records/typescriptEslintOverrideRecords"

import type { ESLint } from "eslint"

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
  },
} as const satisfies ESLint.Plugin

export = plugin
