import eslintConfigSCJs from "eslint-config-sc-js"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords1 = [
  ...eslintConfigSCJs.configs.baseRecords1,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  ...(typescriptEslint.configs.strictTypeChecked as EslintFlatConfig[]),
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  ...(typescriptEslint.configs.stylisticTypeChecked as EslintFlatConfig[]),
] as const satisfies EslintFlatConfig[]
