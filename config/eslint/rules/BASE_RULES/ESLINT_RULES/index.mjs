import { SORT_KEYS } from "./options/SORT_KEYS/index.mjs"

export const ESLINT_RULES = {
  "comma-dangle": [2, "always-multiline"],
  "complexity": [2, 5],
  "implicit-arrow-linebreak": [2, "beside"],
  "max-depth": [1, 3],
  "max-len": 0,
  "max-lines": [2, { max: 100 }],
  "max-nested-callbacks": [1, 3],
  "max-statements": [1, 10],
  "multiline-comment-style": 0,
  "no-magic-numbers": 1,
  "no-multi-spaces": 0,
  "no-undefined": 0,
  "no-unused-vars": 0, // check by tsc
  "no-use-before-define": 0, // check by typescript-eslint
  "object-curly-newline": 0,
  "operator-linebreak": [2, "after"],
  "quote-props": 0,
  "quotes": [2, "double", { avoidEscape: true }],
  "semi": [2, "never"],
  "sort-keys": SORT_KEYS,
}
