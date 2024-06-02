import { SORT_KEYS } from "./options/SORT_KEYS/index.mjs"

export const ESLINT_RULES = {
  "comma-dangle": 0, // check by stylistic
  "complexity": [2, 5],
  "implicit-arrow-linebreak": 0, // check by stylistic
  "max-depth": [1, 3],
  "max-len": 0, // check by stylistic
  "max-lines": [2, { max: 100 }],
  "max-nested-callbacks": [1, 3],
  "max-statements": [1, 10],
  "multiline-comment-style": 0,
  "no-magic-numbers": 1,
  "no-multi-spaces": 0, // check by stylistic
  "no-undefined": 0,
  "no-unused-vars": 0, // check by tsc
  "no-use-before-define": 0, // check by typescript-eslint
  "object-curly-newline": 0, // check by stylistic
  "operator-linebreak": 0, // check by stylistic
  "quote-props": 0, // check by stylistic
  "quotes": 0, // check by stylistic
  "semi": 0, // check by stylistic
  "sort-keys": SORT_KEYS,
}
