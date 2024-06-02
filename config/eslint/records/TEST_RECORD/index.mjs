import { TEST_RULES } from "../../rules/TEST_RULES/index.mjs"

export const TEST_RECORD = {
  files: ["**/{spec,test}?(s)/**/*.*", "**/*.{spec,test}?(s).*"],
  rules: TEST_RULES,
}
