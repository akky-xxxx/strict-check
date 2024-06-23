import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"
import { importOverrideRules } from "../../rules/importOverrideRules"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const typescriptEslintOverrideRecord = {
  name: `${PACKAGE_NAME}/typescriptEslintOverrideRecord`,

  files: FILES.TS,
  rules: {
    ...eslintOverrideRules,
    ...importOverrideRules,
    ...typescriptEslintOverrideRules,
  },
} as const satisfies EslintFlatConfig
