import { MAX_LENGTH } from "./options/MAX_LENGTH/index.mjs"
import { MEMBER_DELIMITER_STYLE } from "./options/MEMBER_DELIMITER_STYLE/index.mjs"
import { OPERATOR_LINEBREAK } from "./options/OPERATOR_LINEBREAK/index.mjs"

export const STYLISTIC_RULES = {
  "@stylistic/arrow-parens": [2, "always"],
  "@stylistic/brace-style": [2, "1tbs"],
  "@stylistic/max-len": MAX_LENGTH,
  "@stylistic/member-delimiter-style": MEMBER_DELIMITER_STYLE,
  "@stylistic/operator-linebreak": OPERATOR_LINEBREAK,
  "@stylistic/quotes": [2, "double"],
  "@stylistic/semi": [2, "never"],
}
