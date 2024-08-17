import { z } from "zod"

import { ARRAY_LENGTHS } from "../../../../libs/shared-for-plugin"

export const optionsSchema = z
  .array(
    z.object({
      // TODO: 正規表現を削除するタイミングで z.string にする
      allowPatterns: z.array(z.any()),
    }),
  )
  .length(ARRAY_LENGTHS.ONE)
