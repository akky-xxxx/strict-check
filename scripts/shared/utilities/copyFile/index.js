const fs = require("fs")
const path = require("path")

const FIRST_CHARACTER = 0

const copyFile = (from, to) => (thisPath) => {
  const toPath = path.join(to, thisPath)
  const expectDirectory = toPath.slice(FIRST_CHARACTER, toPath.lastIndexOf("/"))
  if (!fs.existsSync(expectDirectory)) {
    fs.mkdirSync(expectDirectory, { recursive: true })
  }
  fs.copyFileSync(path.join(from, thisPath), toPath)
}

module.exports = {
  copyFile,
}
