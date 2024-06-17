module.exports = {
  extends: ["sc-jest/legacy", "plugin:unicorn/recommended"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
}
