/* eslint-disable no-magic-numbers, no-console, max-lines, no-unused-vars */
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
}

// eslint-disable-next-line no-use-before-define
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

// eslint-disable-next-line unicorn/prefer-string-starts-ends-with
const result = /^bar/.test("test")

const function5 = () => {
  // allow list of unicorn/prevent-abbreviations
  const props = 1
  const Props = 1
  const req = 1
  const Req = 1
  const res = 1
  const Res = 1
  const ref = 1
  const Ref = 1
  const env = 1
  const Env = 1
}
