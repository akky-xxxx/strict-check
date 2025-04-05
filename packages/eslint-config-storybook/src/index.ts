import { flatConfig } from "./flatConfig"
import { overrideJavascriptRecord } from "./shared/config/records/overrideJavascriptRecord"
import { overrideTypescriptRecord } from "./shared/config/records/overrideTypescriptRecord"
import { storybookConfigRecords } from "./shared/config/records/storybookConfigRecords"
import { PACKAGE_NAME } from "./shared/const/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    recommended: flatConfig,

    storybookConfigRecords,

    overrideJavascriptRecord,
    overrideTypescriptRecord,
  },
} as const satisfies Plugin

export = plugin
