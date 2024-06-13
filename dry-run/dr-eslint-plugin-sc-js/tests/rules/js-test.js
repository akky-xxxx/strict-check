// eslint-disable-next-line sc-js/file-path-patterns
import path from "path"

console.log(path.join("../", "../"))

// eslint-disable-next-line sc-js/match-names-of-file-and-export
export const one = 1

// eslint-disable-next-line sc-js/forbidden-multiple-named-exports, sc-js/match-names-of-file-and-export
export const two = 2

// eslint-disable-next-line sc-js/restrict-use-of-process-env
console.log(process.env)
