import { BEST_PRACTICES_RULES } from "./BEST_PRACTICES_RULES/index.mjs"
import { ERRORS_RULES } from "./ERRORS_RULES/index.mjs"
import { ES6_RULES } from "./ES6_RULES/index.mjs"
import { IMPORTS_RULES } from "./IMPORTS_RULES/index.mjs"
import { NODE_RULES } from "./NODE_RULES/index.mjs"
import { STRICT_RULES } from "./STRICT_RULES/index.mjs"
import { STYLE_RULES } from "./STYLE_RULES/index.mjs"
import { VARIABLES_RULES } from "./VARIABLES_RULES/index.mjs"

// eslint-config-airbnb-base の rules/*.js (best-practices, errors, node, style,
// variables, es6, imports, strict) をこの順でマージしたもの。キーの重複はない
// (生成時に確認済み)。
export const AIRBNB_BASE_RULES = {
  ...BEST_PRACTICES_RULES,
  ...ERRORS_RULES,
  ...NODE_RULES,
  ...STYLE_RULES,
  ...VARIABLES_RULES,
  ...ES6_RULES,
  ...IMPORTS_RULES,
  ...STRICT_RULES,
}
