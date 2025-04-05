// TODO: 使用してる config, plugin が v9 に対応したら custom config に戻す
import eslint from "@eslint/js"
// import { BASE_RECORDS } from "strict-check/config/eslint/records/BASE_RECORDS/index.mjs"
// import { CONFIGS_RECORD } from "strict-check/config/eslint/records/CONFIGS_RECORD/index.mjs"
// import { ESLINT_CONFIG_RECORD } from "strict-check/config/eslint/records/ESLINT_CONFIG_RECORD/index.mjs"
import { IGNORE_RECORD } from "strict-check/config/eslint/records/IGNORE_RECORD/index.mjs"
// import { SCRIPTS_RECORD } from "strict-check/config/eslint/records/SCRIPTS_RECORD/index.mjs"
// import { TEST_RECORD } from "strict-check/config/eslint/records/TEST_RECORD/index.mjs"
// import { TYPESCRIPT_RECORDS } from "strict-check/config/eslint/records/TYPESCRIPT_RECORDS/index.mjs"

const CONFIG = [
  // TODO: 使用してる config, plugin が v9 に対応したら custom config に戻す
  eslint.configs.recommended,
  IGNORE_RECORD,
  {
    ignores: ["src/libs/**"],
  },
  // ...BASE_RECORDS,
  // ...TYPESCRIPT_RECORDS,
  // SCRIPTS_RECORD,
  // CONFIGS_RECORD,
  // ESLINT_CONFIG_RECORD,
  // TEST_RECORD,
  // {
  //   settings: {
  //     "import/resolver": {
  //       node: {
  //         extensions: [".ts"],
  //       },
  //     },
  //   },
  // },
  {
    files: ["cspell.config.js"],
    rules: {
      "no-undef": 0,
    },
  },
]

export default CONFIG
