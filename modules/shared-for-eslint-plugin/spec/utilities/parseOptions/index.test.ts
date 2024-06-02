import { z } from "zod"

import { parseOptions } from "../../../src/utilities/parseOptions"

const schema = z.array(z.string())

describe("parseOptions", () => {
  it("when option is valid, return parsed data", () => {
    const option = [""]
    expect(parseOptions(option, schema)).toStrictEqual([""])
  })

  it("when option is invalid, and error is ZodError, throw error message", () => {
    const option = [0]
    expect(() => parseOptions(option, schema)).toThrow(
      "Invalid options, please check it.",
    )
  })
})
