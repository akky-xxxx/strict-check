import { flatConfig } from "./flatConfig"
import { baseRecords } from "./shared/config/records/baseRecords"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecords } from "./shared/config/records/customRecords"
import { eslintOverrideRecords } from "./shared/config/records/eslintOverrideRecords"
import { jestPluginRecords } from "./shared/config/records/jestPluginRecords"
import { overrideJavascriptRecord } from "./shared/config/records/overrideJavascriptRecord"
import { overrideTypescriptRecord } from "./shared/config/records/overrideTypescriptRecord"
import { typescriptEslintOverrideRecords } from "./shared/config/records/typescriptEslintOverrideRecords"
import { PACKAGE_NAME } from "./shared/const/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    recommended: flatConfig,

    baseRecords,

    customRecords,

    eslintOverrideRecords,
    typescriptEslintOverrideRecords,

    jestPluginRecords,

    customRecord,
    overrideJavascriptRecord,
    overrideTypescriptRecord,
  },
} as const satisfies Plugin

export = plugin
