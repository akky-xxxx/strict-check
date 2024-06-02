const fs = require("fs")

const getDirs = (packagesDir) => {
  const dir2path = (dir) => `${packagesDir}/${dir}`
  const isDir = (path) => fs.statSync(path).isDirectory()
  const path2dir = (path) => path.replace(`${packagesDir}/`, "")
  return fs.readdirSync(packagesDir).map(dir2path).filter(isDir).map(path2dir)
}

exports.dirs = [
  "root",
  ...getDirs("./packages"),
  ...getDirs("./modules"),
  "*",
  "packages",
]
