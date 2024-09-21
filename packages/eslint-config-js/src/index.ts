import { flatConfig } from "./flatConfig"
import { airbnbBaseRecords } from "./shared/config/records/airbnbBaseRecords"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecords } from "./shared/config/records/customRecords"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { resetRecordForStylistic } from "./shared/config/records/resetRecordForStylistic"
import { resetRecordsForStylistic } from "./shared/config/records/resetRecordsForStylistic"
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

    // TODO: 0.0.7 以降で削除 ここから
    baseRecords1,
    baseRecords2,

    customRecords,
    resetRecordsForStylistic,
    // TODO: 0.0.7 以降で削除 ここまで

    airbnbBaseRecords,
    eslintRecommendedRecord,
    initialRecord,
    stylisticRecord,
    unicornRecommendedRecords,

    customRecord,
    resetRecordForStylistic,
  },
} as const satisfies Plugin

export = plugin
