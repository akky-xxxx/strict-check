/**
 * github actions で node_modules の link 越しの参照がエラーになるための回避用
 */

const fs = require("fs")
const path = require("path")

const { DIRECTORIES } = require("../shared/constants/DIRECTORIES")
const { copyFile } = require("../shared/utilities/copyFile")
const { getFilePath } = require("../shared/utilities/getFilePath")
const { getFilePaths } = require("../shared/utilities/getFilePaths")
const { getFsMethod } = require("../shared/utilities/getFsMethod")

const ROOT = path.resolve(__dirname, "../../")

const CONFIG_DIRECTORY = path.join(ROOT, DIRECTORIES.CONFIG)

const PACKAGE_DIRECTORY =
  path.join(ROOT, DIRECTORIES.WS_PACKAGES)

fs.readdirSync(PACKAGE_DIRECTORY).forEach((thisPath) => {
  const joinedPath = path.join(PACKAGE_DIRECTORY, thisPath)
  if (fs.statSync(joinedPath).isFile()) return
  const dest = path.join(joinedPath, `.${DIRECTORIES.CONFIG}`)
  const fsMethod = getFsMethod(fs.existsSync(dest))
  fs[fsMethod](dest, { recursive: true })

  getFilePaths(CONFIG_DIRECTORY)
    .map(getFilePath(`/${DIRECTORIES.CONFIG}/`))
    .forEach(copyFile(CONFIG_DIRECTORY, dest))
})

console.log("Finished the config files copy.")
