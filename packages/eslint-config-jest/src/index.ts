import { flatConfig } from "./flatConfig"
import { customRecord } from "./shared/config/records/customRecord"
import { jestPluginRecords } from "./shared/config/records/jestPluginRecords"
import { overrideJavascriptRecord } from "./shared/config/records/overrideJavascriptRecord"
import { overrideTypescriptRecord } from "./shared/config/records/overrideTypescriptRecord"
import { PACKAGE_NAME } from "./shared/const/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    recommended: flatConfig,

    jestPluginRecords,

    customRecord,
    overrideJavascriptRecord,
    overrideTypescriptRecord,
  },
} as const satisfies Plugin

export = plugin
