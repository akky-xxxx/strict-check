/* eslint-disable max-lines */
// eslint-config-airbnb-base@15.0.0 の compat.extends() 出力から機械生成。手編集しない。詳細は README.md を参照。
export const ES6_RULES = {
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  "arrow-parens": ["error", "always"],
  "arrow-spacing": [
    "error",
    {
      after: true,
      before: true,
    },
  ],
  "constructor-super": "error",
  "generator-star-spacing": [
    "error",
    {
      after: true,
      before: false,
    },
  ],
  "no-class-assign": "error",
  "no-confusing-arrow": [
    "error",
    {
      allowParens: true,
    },
  ],
  "no-const-assign": "error",
  "no-dupe-class-members": "error",
  "no-duplicate-imports": "off",
  "no-new-symbol": "error",
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: ["default", "then"],
    },
  ],
  "no-restricted-imports": [
    "off",
    {
      paths: [],
      patterns: [],
    },
  ],
  "no-this-before-super": "error",
  "no-useless-computed-key": "error",
  "no-useless-constructor": "error",
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],
  "no-var": "error",
  "object-shorthand": [
    "error",
    "always",
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],
  "prefer-destructuring": [
    "error",
    {
      AssignmentExpression: {
        array: true,
        object: false,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  "prefer-numeric-literals": "error",
  "prefer-reflect": "off",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "require-yield": "error",
  "rest-spread-spacing": ["error", "never"],
  "sort-imports": [
    "off",
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],
  "symbol-description": "error",
  "template-curly-spacing": "error",
  "yield-star-spacing": ["error", "after"],
}
