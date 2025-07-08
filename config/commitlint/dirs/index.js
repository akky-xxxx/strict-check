// 後から適用したルールのため
/* eslint-disable unicorn/prevent-abbreviations */
const fs = require("fs")

const getDirs = (packagesDir) => {
  try {
    const dir2path = (dir) => `${packagesDir}/${dir}`
    const isDir = (path) => fs.statSync(path).isDirectory()
    const path2dir = (path) => path.replace(`${packagesDir}/`, "")
    return fs.readdirSync(packagesDir).map(dir2path).filter(isDir).map(path2dir)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    throw error
  }
}

exports.dirs = [
  "root",
  ...getDirs("./packages"),
  ...getDirs("./modules"),
  ...getDirs("./dry-run"),
  "*",
  "packages",
]
