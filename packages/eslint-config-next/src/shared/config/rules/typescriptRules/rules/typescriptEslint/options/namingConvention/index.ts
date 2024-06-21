import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type {
  EslintRuleLevelAndOptions,
} from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const namingConvention = [
  SEVERITY.ERROR,

  // Options based: https://typescript-eslint.io/rules/naming-convention/#options
  {
    selector: "default",

    format: ["camelCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },

  {
    selector: "import",

    format: ["camelCase", "PascalCase"],
  },

  {
    selector: "variable",

    format: ["camelCase", "UPPER_CASE", "PascalCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },

  {
    selector: "objectLiteralProperty",

    format: ["camelCase", "UPPER_CASE"],
    leadingUnderscore: "allow",
    trailingUnderscore: "forbid",
  },

  {
    selector: "function",

    format: ["camelCase", "PascalCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },

  {
    selector: "typeLike",

    format: ["PascalCase"],
  },
] as const satisfies EslintRuleLevelAndOptions
