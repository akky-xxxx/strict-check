import { arrayType } from "./options/arrayType"
import { consistentTypeAssertions } from "./options/consistentTypeAssertions"
import { consistentTypeImports } from "./options/consistentTypeImports"
import { noConfusingVoidExpression } from "./options/noConfusingVoidExpression"
import { noUnnecessaryBooleanLiteralCompare } from "./options/noUnnecessaryBooleanLiteralCompare"
import { noUnnecessaryCondition } from "./options/noUnnecessaryCondition"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintRules = {
  "no-magic-numbers": SEVERITY.OFF,
  "no-shadow": SEVERITY.OFF,

  "@typescript-eslint/adjacent-overload-signatures": SEVERITY.ERROR,
  "@typescript-eslint/array-type": arrayType,
  "@typescript-eslint/consistent-indexed-object-style": [
    SEVERITY.ERROR,
    "record",
  ],
  "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
  "@typescript-eslint/consistent-type-definitions": [SEVERITY.ERROR, "type"],
  "@typescript-eslint/consistent-type-imports": consistentTypeImports,
  "@typescript-eslint/explicit-module-boundary-types": SEVERITY.OFF,
  "@typescript-eslint/no-confusing-void-expression":
  noConfusingVoidExpression,
  "@typescript-eslint/no-empty-function": SEVERITY.ERROR,
  "@typescript-eslint/no-empty-interface": SEVERITY.WARN,
  "@typescript-eslint/no-inferrable-types": SEVERITY.WARN,
  "@typescript-eslint/no-magic-numbers": SEVERITY.WARN,
  "@typescript-eslint/no-misused-promises": SEVERITY.WARN,
  "@typescript-eslint/no-non-null-assertion": SEVERITY.ERROR,
  "@typescript-eslint/no-shadow": SEVERITY.WARN,
  "@typescript-eslint/no-unnecessary-boolean-literal-compare":
  noUnnecessaryBooleanLiteralCompare,
  "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
  "@typescript-eslint/no-unnecessary-type-arguments": SEVERITY.WARN,
  "@typescript-eslint/no-use-before-define": SEVERITY.ERROR,
  "@typescript-eslint/prefer-namespace-keyword": SEVERITY.ERROR,
  "@typescript-eslint/prefer-string-starts-ends-with": SEVERITY.WARN,
  "@typescript-eslint/sort-type-constituents": SEVERITY.ERROR,
} as const satisfies EslintRules
