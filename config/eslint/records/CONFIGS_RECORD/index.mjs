import { CONFIGS_RULES } from "../../rules/CONFIGS_RULES/index.mjs"

export const CONFIGS_RECORD = {
  files: ["*.{js,mjs,ts}", "config/**/*.{js,mjs}"],
  rules: {
    ...CONFIGS_RULES,
  },
}
