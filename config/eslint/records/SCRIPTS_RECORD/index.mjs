import { SCRIPTS_RULES } from "../../rules/SCRIPTS_RULES/index.mjs"

export const SCRIPTS_RECORD = {
  files: ["scripts/**/*.mjs"],
  rules: {
    ...SCRIPTS_RULES,
  },
}
