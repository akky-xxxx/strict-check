import { z } from "zod"

import { ARRAY_LENGTHS } from "../../../../libs/shared-for-plugin"

export const optionsSchema = z
  .array(
    z.object({
      targets: z.array(z.string()),
    }),
  )
  .length(ARRAY_LENGTHS.ONE)
