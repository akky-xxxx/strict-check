import eslintConfigSCReact from "eslint-config-sc-react"

import { nextRecord } from "../shared/config/records/nextRecord"
import { resetRecordForStylistic } from "../shared/config/records/resetRecordForStylistic"
import { scRectCustomRecordWithTypescript } from "../shared/config/records/scRectCustomRecordWithTypescript"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "plugin:@next/next/core-web-vitals",
    "sc-react/legacy",
  ],
  plugins: ["@next/next"],
  rules: {
    ...eslintConfigSCReact.configs.customRecord.rules,
    ...nextRecord.rules,
    ...resetRecordForStylistic.rules,
  },

  overrides: [
    {
      files: ["**/*.ts{,x}"],
      rules: {
        ...scRectCustomRecordWithTypescript.rules,
      },
    },
  ],
} satisfies EslintLegacyConfig
