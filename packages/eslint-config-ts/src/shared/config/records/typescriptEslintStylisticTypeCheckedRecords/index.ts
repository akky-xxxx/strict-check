// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const typescriptEslintStylisticTypeCheckedRecords = [
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  ...(typescriptEslint.configs.strictTypeChecked as EslintFlatConfig[]),
] as const satisfies EslintFlatConfig[]
