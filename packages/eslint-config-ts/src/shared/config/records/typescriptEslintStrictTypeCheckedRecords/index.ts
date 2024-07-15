// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const typescriptEslintStrictTypeCheckedRecords = [
  {
    name: `${PACKAGE_NAME}/typescriptEslintStrictTypeCheckedRecords`,

    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  ...(typescriptEslint.configs.stylisticTypeChecked as EslintFlatConfig[]),
] as const satisfies EslintFlatConfig[]
