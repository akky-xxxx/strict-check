import { z } from "zod"

import { ARRAY_LENGTHS } from "../../../../libs/shared-for-plugin"

export const optionsSchema = z
  .array(
    z.object({
      captures: z.array(z.instanceof(RegExp)),
    }),
  )
  .length(ARRAY_LENGTHS.ONE)
