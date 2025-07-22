import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// cjs 形式のため
// eslint-disable-next-line @typescript-eslint/no-require-imports
const eslintPluginImport = require("eslint-plugin-import")

export const importRecommendedRecord = {
  ...eslintPluginImport.flatConfigs.recommended,
  ...eslintPluginImport.flatConfigs.typescript,
  name: `${PACKAGE_NAME}/importRecommendedRecord`,
  plugins: {
    import: eslintPluginImport,
  },
} as const satisfies EslintFlatConfig
