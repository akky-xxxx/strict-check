import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// cjs 形式のため
// eslint-disable-next-line @typescript-eslint/no-require-imports
const eslintPluginPromise = require("eslint-plugin-promise")

export const promiseRecommendedRecord = {
  ...eslintPluginPromise.configs["flat/recommended"],
  name: `${PACKAGE_NAME}/promiseRecommendedRecord`,
} as const satisfies EslintFlatConfig
