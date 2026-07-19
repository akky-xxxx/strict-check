import eslintPluginImport from "eslint-plugin-import"

import { ES6_GLOBALS } from "./globals/ES6_GLOBALS/index.mjs"
import { NODE_GLOBALS } from "./globals/NODE_GLOBALS/index.mjs"
import { AIRBNB_BASE_RULES } from "./rules/index.mjs"
import { IMPORT_SETTINGS } from "./settings/IMPORT_SETTINGS/index.mjs"

// eslint-config-airbnb-base@15.0.0 が flat config 未対応のため、
// 従来 compat.extends("eslint-config-airbnb-base") が生成していた
// flat config を移植したもの。除却手順は README.md を参照。
export const AIRBNB_BASE_RECORDS = [
  {
    languageOptions: {
      globals: {
        ...NODE_GLOBALS,
        ...ES6_GLOBALS,
      },
    },
  },
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      ...AIRBNB_BASE_RULES,
    },
    settings: {
      ...IMPORT_SETTINGS,
    },
  },
]
