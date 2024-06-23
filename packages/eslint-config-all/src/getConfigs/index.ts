import { getConfigsBase } from "./modules/getConfigsBase"

import type { EslintFlatConfig } from "../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../shared/types/Library"

type Language = "javascript" | "typescript"
type Libraries = Library[]
type GetConfigs = (language: Language, libraries?: Libraries) => EslintFlatConfig[]

export const getConfigs: GetConfigs = (language, libraries) => {
  const result = getConfigsBase(language, libraries)
  return result.flat()
}
