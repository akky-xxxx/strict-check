import { flatConfig } from "./flatConfig"
import { airbnbBaseRecords } from "./shared/config/records/airbnbBaseRecords"
import { customRecord } from "./shared/config/records/customRecord"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { importRecommendedRecord } from "./shared/config/records/importRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { resetRecordForStyle } from "./shared/config/records/resetRecordForStyle"
import { unicornRecommendedRecords } from "./shared/config/records/unicornRecommendedRecords"
import { PACKAGE_NAME } from "./shared/constants/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    recommended: flatConfig,

    airbnbBaseRecords,
    eslintRecommendedRecord,
    importRecommendedRecord,
    initialRecord,
    unicornRecommendedRecords,

    customRecord,
    resetRecordForStyle,
  },
} as const satisfies Plugin

export = plugin
