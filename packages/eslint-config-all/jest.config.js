module.exports = {
  roots: ["<rootDir>/spec"],
  testMatch: ["**/tests/**/?(*.)test.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@stylistic/eslint-plugin)/)",
  ],
}
