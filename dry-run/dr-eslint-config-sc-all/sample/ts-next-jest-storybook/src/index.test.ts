/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/require-await, @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line jest/consistent-test-it, jest/require-top-level-describe
test("test1", () => {
  expect(1).toBe(1)
})

describe("dry-run", () => {
  // eslint-disable-next-line jest/consistent-test-it
  test("test2", () => {
    expect(1).toBe(1)
    expect(1).toBe(1)
    expect(1).toBe(1)
    // eslint-disable-next-line jest/max-expects
    expect(1).toBe(1)
  })

  // eslint-disable-next-line jest/consistent-test-it, jest/no-disabled-tests
  test.skip("test3", () => {
    expect(1).toBe(1)
  })
})

describe("max-nested-describe1", () => {
  describe("max-nested-describe2", () => {
    describe("max-nested-describe3", () => {
      // eslint-disable-next-line jest/max-nested-describe
      describe("max-nested-describe4", () => {})
    })
  })
})

describe("no-conditional-in-test1-describe", () => {
  it("no-conditional-in-test1-it", () => {
    // eslint-disable-next-line jest/no-conditional-in-test, jest/no-conditional-expect
    if (Math.random() > 0.5) expect(1).toBe(1)
  })
})

describe("no-conditional-in-test2-describe", () => {
  if (Math.random() > 0.5) {
    it("no-conditional-in-test2-it", () => {
      expect(1).toBe(1)
    })
  }
})

describe("no-duplicate-hooks", () => {
  beforeEach(() => {
    console.log("beforeEach")
  })

  // eslint-disable-next-line jest/no-duplicate-hooks
  beforeEach(() => {
    console.log("beforeEach")
  })
})

describe("prefer-called-with-describe", () => {
  it("prefer-called-with-it", () => {
    // eslint-disable-next-line jest/prefer-called-with
    expect(() => {}).toHaveBeenCalled()
    expect(() => {}).toHaveBeenCalledWith(undefined)
  })
})

describe("prefer-comparison-matcher-describe", () => {
  it("prefer-comparison-matcher-it", () => {
    // eslint-disable-next-line jest/prefer-comparison-matcher
    expect(1 > 5).toBe(true)
    expect(1).toBeGreaterThan(5)
  })
})

describe("prefer-each-describe", () => {
  const array = [1]

  // eslint-disable-next-line jest/prefer-each
  for (let number = 0; number < array.length; number += 1) {
    it("prefer-each-it", () => {
      expect(number).toBe(1)
    })
  }

  it.each(array)("prefer-each-it %s", (number) => {
    expect(number).toBe(1)
  })
})

describe("prefer-equality-matcher-describe", () => {
  it("prefer-equality-matcher-it", () => {
    // eslint-disable-next-line jest/prefer-equality-matcher
    expect(Math.random() === 2).toBe(true)
    expect(1).toBe(2)
  })
})

describe("prefer-expect-resolves-describe", () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const asyncFunction = async () => {
    console.log("asyncFunction")
  }
  it("prefer-equality-matcher-it", async () => {
    // eslint-disable-next-line jest/prefer-expect-resolves
    expect(await asyncFunction()).toBe(1)
    await expect(asyncFunction()).resolves.toBe(1)
  })
})

describe("prefer-hooks-in-order-describe", () => {
  beforeEach(() => {})
  // eslint-disable-next-line jest/prefer-hooks-in-order
  beforeAll(() => {})
})

describe("prefer-hooks-on-top-order-describe", () => {
  it("prefer-hooks-on-top-order-it", () => {
    expect(1).toBe(1)
  })
  // eslint-disable-next-line jest/prefer-hooks-on-top
  beforeEach(() => {})
})

describe("require-to-throw-message-describe", () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const throwFunction = () => {}
  it("require-to-throw-message-it", () => {
    // eslint-disable-next-line jest/require-to-throw-message
    expect(() => throwFunction()).toThrow()
    expect(() => throwFunction()).toThrow("error message")
  })
})
