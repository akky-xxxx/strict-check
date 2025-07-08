import eslintConfigScAll from "eslint-config-sc-all"

import { BASE_RECORDS } from "./config/eslint/records/BASE_RECORDS/index.mjs"
import { CONFIGS_RECORD } from "./config/eslint/records/CONFIGS_RECORD/index.mjs"
import { ESLINT_CONFIG_RECORD } from "./config/eslint/records/ESLINT_CONFIG_RECORD/index.mjs"
import { SCRIPTS_RECORD } from "./config/eslint/records/SCRIPTS_RECORD/index.mjs"

const CONFIG = [
  {
    ignores: ["**/{dry-run,modules,packages}/**"],
  },
  ...eslintConfigScAll.getConfigs("javascript"),
  ...BASE_RECORDS,
  SCRIPTS_RECORD,
  CONFIGS_RECORD,
  ESLINT_CONFIG_RECORD,
]

export default CONFIG
