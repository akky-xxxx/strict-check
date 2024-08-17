// eslint-disable-next-line import/no-unresolved
import { RuleTester } from "@typescript-eslint/rule-tester"

export const tester = new RuleTester({
  defaultFilenames: {
    ts: "sample/useButton/index.ts",
    tsx: "sample/Button/index.tsx",
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
})
