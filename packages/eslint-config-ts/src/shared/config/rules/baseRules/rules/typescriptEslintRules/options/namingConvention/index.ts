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
    trailingUnderscore: "forbid",
  },

  {
    selector: "import",

    format: ["camelCase", "PascalCase"],
  },

  {
    selector: ["variable", "objectLiteralProperty"],

    format: ["camelCase", "UPPER_CASE", "PascalCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "forbid",
  },

  {
    selector: "function",

    format: ["camelCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "forbid",
  },

  {
    selector: "typeLike",

    format: ["PascalCase"],
  },
  {
    selector: "class",

    format: ["PascalCase"],
  },
] as const satisfies EslintRuleLevelAndOptions
