import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { airbnbBaseRecords } from "./shared/config/records/airbnbBaseRecords"
import { baseRecords1 } from "./shared/config/records/baseRecords1"
import { baseRecords2 } from "./shared/config/records/baseRecords2"
import { customRecord } from "./shared/config/records/customRecord"
import { customRecords } from "./shared/config/records/customRecords"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { resetRecordForStylistic } from "./shared/config/records/resetRecordForStylistic"
import { resetRecordsForStylistic } from "./shared/config/records/resetRecordsForStylistic"
import { scJsCustomRecord } from "./shared/config/records/scJsCustomRecord"
import { stylisticRecord } from "./shared/config/records/stylisticRecord"
import {
  typescriptEslintStrictTypeCheckedRecords,
} from "./shared/config/records/typescriptEslintStrictTypeCheckedRecords"
import {
  typescriptEslintStylisticTypeCheckedRecords,
} from "./shared/config/records/typescriptEslintStylisticTypeCheckedRecords"
import { unicornRecommendedRecords } from "./shared/config/records/unicornRecommendedRecords"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "@strict/eslint-config-ts",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    // TODO: 0.0.4 以降で削除 ここから
    baseRecords1,
    baseRecords2,

    customRecords,
    resetRecordsForStylistic,
    // TODO: 0.0.4 以降で削除 ここまで

    airbnbBaseRecords,
    eslintRecommendedRecord,
    initialRecord,
    resetRecordForStylistic,
    scJsCustomRecord,
    stylisticRecord,
    typescriptEslintStrictTypeCheckedRecords,
    typescriptEslintStylisticTypeCheckedRecords,
    unicornRecommendedRecords,

    customRecord,
  },
} as const satisfies Plugin

export = plugin
