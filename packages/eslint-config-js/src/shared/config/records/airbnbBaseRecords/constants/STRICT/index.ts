// refer: https://github.com/airbnb/javascript/blob/11f986fdc7d6b4c80e396437e9c45c939362bdee/packages/eslint-config-airbnb-base/rules/strict.js
import type { EslintFlatConfig } from "../../../../../../libs/shared-for-config/types/EslintFlatConfig"

export const STRICT = {
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never']
  }
} as const satisfies EslintFlatConfig
