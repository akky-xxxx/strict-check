/* eslint-disable no-console, max-lines, no-magic-numbers */
// eslint-disable-next-line max-statements
export const javascriptTest1 = () => {
  const state0 = Math.random()
  const state1 = Math.random()
  const state2 = Math.random()
  const state3 = Math.random()
  const state4 = Math.random()
  const state5 = Math.random()
  const state6 = Math.random()
  const state7 = Math.random()
  const state8 = Math.random()
  /* eslint-disable unicorn/numeric-separators-style */
  const array = [
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
  ]
  /* eslint-enable unicorn/numeric-separators-style */

  return [
    state0,
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    array,
  ]
}

// eslint-disable-next-line consistent-return
export const depthFunction = () => {
  /* eslint-disable no-restricted-syntax */
  for (const item1 of [""]) {
    for (const item2 of [""]) {
      for (const item3 of [""]) {
        // eslint-disable-next-line max-depth
        if (item3 === "example") {
          return { item1, item2, item3 }
        }
      }
    }
  }
  /* eslint-enable no-restricted-syntax */
}

const Zero = 0
// eslint-disable-next-line complexity
export const javascriptTest2 = () => {
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero

  return 1
}

export const javascriptObjectTest = {
  three: "three",
  two: "two",
  // eslint-disable-next-line sort-keys
  one: "one",

  five: "five",
  // eslint-disable-next-line @stylistic/quotes
  four: 'four',
  six: undefined,
}

try {
  const random = Math.random()
  // eslint-disable-next-line unicorn/prevent-abbreviations, unicorn/catch-error-name
} catch (e) {
  console.error(e)
}

export const conditionTest = () => {
  const isTest = true
  return isTest === true
}

// eslint-disable-next-line unicorn/prefer-string-starts-ends-with
const result = /^bar/.test("test")
console.log(result)
