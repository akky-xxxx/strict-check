import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { typescriptRules } from "../../rules/typescriptRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecordWithTypescript = {
  name: `${PACKAGE_NAME}/customRecordWithTypescript`,

  files: ["**/*.ts", "**/*.tsx"],
  rules: {
    ...typescriptRules,
  },
} as const satisfies EslintFlatConfig
