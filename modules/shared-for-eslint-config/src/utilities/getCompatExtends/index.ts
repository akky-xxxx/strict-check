import { FlatCompat } from "@eslint/eslintrc"

import type { EslintFlatConfig } from "../../types/EslintFlatConfig"

const compat = new FlatCompat()

type GetCompatExtends = (...extendPaths: string[]) => EslintFlatConfig[]

/**
 * @deprecated flat config に対応してない config 向け
 */
export const getCompatExtends: GetCompatExtends = (...extendPaths) => compat.extends(...extendPaths)
