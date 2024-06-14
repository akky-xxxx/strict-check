module.exports = {
  extends: ["sc-jest/legacy"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
}
