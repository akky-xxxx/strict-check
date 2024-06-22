import { getConfigsBaseForJavascript } from "./modules/getConfigsBaseForJavascript"
import { getConfigsBaseForTypescript } from "./modules/getConfigsBaseForTypescript"

import type { EslintFlatConfig } from "../../../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../../../shared/types/Library"

type Language = "javascript" | "typescript"

type Libraries = Library[]
type GetConfigsBase = (language: Language, libraries?: Libraries) =>
  EslintFlatConfig[] | EslintFlatConfig[][]

export const getConfigsBase: GetConfigsBase = (language, libraries) => {
  switch (language) {
    case "javascript": {
      return getConfigsBaseForJavascript(libraries)
    }
    case "typescript": {
      return getConfigsBaseForTypescript(libraries)
    }

    default: {
      const unreachable: never = language
      return unreachable
    }
  }
}
