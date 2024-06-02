import { BASE_RECORDS } from "strict-check/config/eslint/RECORDS/BASE_RECORDS/index.mjs"
import { CONFIGS_RECORD } from "strict-check/config/eslint/RECORDS/CONFIGS_RECORD/index.mjs"
import { ESLINT_CONFIG_RECORD } from "strict-check/config/eslint/RECORDS/ESLINT_CONFIG_RECORD/index.mjs"
import { SCRIPTS_RECORD } from "strict-check/config/eslint/RECORDS/SCRIPTS_RECORD/index.mjs"
import { IGNORE_RECORD } from "strict-check/config/eslint/records/IGNORE_RECORD/index.mjs"
import { TEST_RECORD } from "strict-check/config/eslint/records/TEST_RECORD/index.mjs"
import { TYPESCRIPT_RECORDS } from "strict-check/config/eslint/records/TYPESCRIPT_RECORDS/index.mjs"

const CONFIG = [
  IGNORE_RECORD,
  ...BASE_RECORDS,
  ...TYPESCRIPT_RECORDS,
  SCRIPTS_RECORD,
  CONFIGS_RECORD,
  ESLINT_CONFIG_RECORD,
  TEST_RECORD,
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".ts"],
        },
      },
    },
  },
]

export default CONFIG
