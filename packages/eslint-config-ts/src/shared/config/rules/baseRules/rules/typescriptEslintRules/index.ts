import { arrayType } from "./options/arrayType"
import { consistentTypeAssertions } from "./options/consistentTypeAssertions"
import { consistentTypeImports } from "./options/consistentTypeImports"
import { noConfusingVoidExpression } from "./options/noConfusingVoidExpression"
import { noUnnecessaryBooleanLiteralCompare } from "./options/noUnnecessaryBooleanLiteralCompare"
import { noUnnecessaryCondition } from "./options/noUnnecessaryCondition"
import { preferDestructuring } from "./options/preferDestructuring"
import { requireArraySortCompare } from "./options/requireArraySortCompare"
import { switchExhaustivenessCheck } from "./options/switchExhaustivenessCheck"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintRules = {
  "@typescript-eslint/adjacent-overload-signatures": SEVERITY.ERROR,
  "@typescript-eslint/array-type": arrayType,
  "@typescript-eslint/consistent-indexed-object-style": [SEVERITY.ERROR, "record"],
  "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
  "@typescript-eslint/consistent-type-definitions": [SEVERITY.ERROR, "type"],
  "@typescript-eslint/consistent-type-exports": SEVERITY.ERROR,
  "@typescript-eslint/consistent-type-imports": consistentTypeImports,
  "@typescript-eslint/explicit-module-boundary-types": SEVERITY.OFF,
  "@typescript-eslint/max-params": SEVERITY.WARN,
  "@typescript-eslint/naming-convention": SEVERITY.ERROR,
  "@typescript-eslint/no-confusing-void-expression": noConfusingVoidExpression,
  "@typescript-eslint/no-empty-function": SEVERITY.ERROR,
  "@typescript-eslint/no-empty-interface": SEVERITY.WARN,
  "@typescript-eslint/no-import-type-side-effects": SEVERITY.ERROR,
  "@typescript-eslint/no-inferrable-types": SEVERITY.WARN,
  "@typescript-eslint/no-magic-numbers": SEVERITY.WARN,
  "@typescript-eslint/no-misused-promises": SEVERITY.WARN,
  "@typescript-eslint/no-non-null-assertion": SEVERITY.ERROR,
  "@typescript-eslint/no-shadow": SEVERITY.WARN,
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": noUnnecessaryBooleanLiteralCompare,
  "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
  "@typescript-eslint/no-unnecessary-type-arguments": SEVERITY.WARN,
  "@typescript-eslint/no-unused-vars": SEVERITY.ERROR,
  "@typescript-eslint/no-use-before-define": SEVERITY.ERROR,
  "@typescript-eslint/prefer-destructuring": preferDestructuring,
  "@typescript-eslint/prefer-find": SEVERITY.ERROR,
  "@typescript-eslint/prefer-namespace-keyword": SEVERITY.ERROR,
  "@typescript-eslint/prefer-string-starts-ends-with": SEVERITY.WARN,
  "@typescript-eslint/require-array-sort-compare": requireArraySortCompare,
  "@typescript-eslint/sort-type-constituents": SEVERITY.ERROR,
  "@typescript-eslint/strict-boolean-expressions": SEVERITY.ERROR,
  "@typescript-eslint/switch-exhaustiveness-check": switchExhaustivenessCheck,
} as const satisfies EslintRules
