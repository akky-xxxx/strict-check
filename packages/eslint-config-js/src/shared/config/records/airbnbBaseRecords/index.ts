import { airbnbBaseReplacement } from "./modules/airbnbBaseReplacement"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbBaseRecords`,
  },
  {
    languageOptions: {
      ...airbnbBaseReplacement.languageOptions,
    },
    name: `${PACKAGE_NAME}/airbnbBaseRecords/replacement`,
    rules: {
      ...airbnbBaseReplacement.rules.eslint,
      ...airbnbBaseReplacement.rules.import,
    },
  },
] as const satisfies EslintFlatConfig[]
