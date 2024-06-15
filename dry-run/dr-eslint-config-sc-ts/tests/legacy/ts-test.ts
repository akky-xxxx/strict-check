/* eslint-disable no-console, max-lines */
/* eslint-disable @typescript-eslint/no-magic-numbers, @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-use-before-define */
// eslint-disable-next-line complexity
const function1 = () => {
  const random = Math.ceil(Math.random() * 10)
  if (random / 2 === 0) return true
  if (random / 3 === 0) return false
  if (random / 4 === 0) return true
  if (random / 5 === 0) return false
  if (random / 6 === 0) return true
  return false
}

const function2 = () => {
  const random = Math.ceil(Math.random() * 10)
  if (random / 2 === 0) {
    if (random / 3 === 0) {
      if (random / 4 === 0) {
        // eslint-disable-next-line max-depth
        if (random / 5 === 0) return false
      }
    }
  }

  return false
}

const function3 = (callback1) => {
  callback1((callback2) => {
    callback2((callback3) => {
      callback3((callback4) => {
        // eslint-disable-next-line max-nested-callbacks
        callback4(() => {
          // console.log("error")
        })
      })
    })
  })
}

// eslint-disable-next-line max-statements
const function4 = () => {
  const random1 = Math.ceil(Math.random() * 10)
  const random2 = Math.ceil(Math.random() * 10)
  const random3 = Math.ceil(Math.random() * 10)
  const random4 = Math.ceil(Math.random() * 10)
  const random5 = Math.ceil(Math.random() * 10)
  const random6 = Math.ceil(Math.random() * 10)
  const random7 = Math.ceil(Math.random() * 10)
  const random8 = Math.ceil(Math.random() * 10)
  const random9 = Math.ceil(Math.random() * 10)
  const random10 = Math.ceil(Math.random() * 10)
  const random11 = Math.ceil(Math.random() * 10)

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const a: number | unknown = 1
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return a as number
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const variable1 = variable2
const variable2 = "no-use-before-define"

const object1 = {
  b: "b",
  // eslint-disable-next-line sort-keys
  a: "a",

  c: "c",
}

// eslint-disable-next-line import/no-default-export
export default 1

const { b } = object1
// eslint-disable-next-line unicorn/consistent-destructuring
console.log(object1.a)

// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line
// increment line

// eslint-disable-next-line @stylistic/quotes
const variable3 = 'double quotes'

try {
  const random = Math.random()
  // eslint-disable-next-line unicorn/prevent-abbreviations, unicorn/catch-error-name
} catch (e) {
  console.error(e)
}

// TODO: unicorn/prefer-string-starts-ends-with と重複してるので unicorn をオフにする
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, unicorn/prefer-string-starts-ends-with
const result = /^bar/.test("test")

// eslint-disable-next-line @typescript-eslint/sort-type-constituents
export type testType = "B" | "A"

function function5<T = number>(argument: T) {
  return argument
}
const ZERO = 0

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
function5<number>(ZERO)

export const function6 = () => {
  const isTest = true
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare, @typescript-eslint/no-unnecessary-condition
  return isTest === true
}

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
export const log = console.log("")

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface testInterface {
  text: string
}

// eslint-disable-next-line @typescript-eslint/array-type
export type TestArray = Array<string>

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type TestObject = {
  [K: string]: string
}

const function7 = (props: unknown) => {
  // eslint-disable-next-line camelcase, @typescript-eslint/no-shadow, unicorn/consistent-function-scoping
  const function7_2 = (props: unknown) => {
    console.log(props)
  }
}
