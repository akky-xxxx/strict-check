import { flatConfig } from "./flatConfig"
import { legacyConfig } from "./legacyConfig"
import { airbnbRecords } from "./shared/config/records/airbnbRecords"
import { eslintRecommendedRecord } from "./shared/config/records/eslintRecommendedRecord"
import { initialRecord } from "./shared/config/records/initialRecord"
import { nextRecord } from "./shared/config/records/nextRecord"
import { reactRecords } from "./shared/config/records/reactRecords"
import { resetRecordForStylistic } from "./shared/config/records/resetRecordForStylistic"
import { scJsCustomRecord } from "./shared/config/records/scJsCustomRecord"
import { scRectCustomRecord } from "./shared/config/records/scRectCustomRecord"
import { scRectCustomRecordWithTypescript } from "./shared/config/records/scRectCustomRecordWithTypescript"
import { stylisticRecord } from "./shared/config/records/stylisticRecord"
import { unicornRecommendedRecords } from "./shared/config/records/unicornRecommendedRecords"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "@strict/eslint-config-sc-next",
  },

  configs: {
    legacy: legacyConfig,
    recommended: flatConfig,

    initialRecord,

    airbnbRecords,
    eslintRecommendedRecord,
    nextRecord,
    reactRecords,
    stylisticRecord,
    unicornRecommendedRecords,

    resetRecordForStylistic,
    scJsCustomRecord,
    scRectCustomRecord,
    scRectCustomRecordWithTypescript,
  },
} as const satisfies Plugin

export = plugin
