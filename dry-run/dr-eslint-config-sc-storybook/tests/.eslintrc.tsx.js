module.exports = {
  extends: ["sc-storybook/legacy"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
}
