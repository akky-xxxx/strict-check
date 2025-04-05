import { flatConfig } from "./flatConfig"
import { airbnbRecords } from "./shared/config/records/airbnbRecords"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecordWithTypescript } from "./shared/config/records/customRecordWithTypescript"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { reactRecords } from "./shared/config/records/reactRecords"
import { resetRecordForStylistic } from "./shared/config/records/resetRecordForStylistic"
import { scJsCustomRecord } from "./shared/config/records/scJsCustomRecord"
import { stylisticRecord } from "./shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "./shared/config/records/unicornRecommendedRecords"
import { PACKAGE_NAME } from "./shared/constants/PACKAGE_NAME"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: PACKAGE_NAME,
  },

  configs: {
    recommended: flatConfig,

    initialRecord,

    airbnbRecords,
    eslintRecommendedRecord,
    reactRecords,
    stylisticRecord,
    unicornRecommendedRecords,

    customRecord,
    customRecordWithTypescript,
    resetRecordForStylistic,
    scJsCustomRecord,
  },
} as const satisfies Plugin

export = plugin
