const fs = require("fs")
const path = require("path")

const { DIRECTORIES } = require("../shared/constants/DIRECTORIES")
const { copyFile } = require("../shared/utilities/copyFile")
const { getFilePath } = require("../shared/utilities/getFilePath")
const { getFilePaths } = require("../shared/utilities/getFilePaths")
const { getFsMethod } = require("../shared/utilities/getFsMethod")

const ROOT = path.resolve(__dirname, "../../")

const SHARED_DIRECTORY =
  path.join(ROOT, DIRECTORIES.WS_MODULES)
const PACKAGE_DIRECTORY =
  path.join(ROOT, DIRECTORIES.WS_PACKAGES)

const isEslintConfigDirectory = (directory) =>
  directory.includes(DIRECTORIES.ESLINT_CONFIG)
const isEslintPluginDirectory = (directory) =>
  directory.includes(DIRECTORIES.ESLINT_PLUGIN)
const isSharedDirectory = (directory) =>
  directory.startsWith(DIRECTORIES.SHARED_PREFIX)

const convertToLibsPath = (destName) =>
  (directory) =>
    path.join(
      PACKAGE_DIRECTORY,
      directory,
      DIRECTORIES.SRC,
      DIRECTORIES.LIBS,
      destName,
    )
const convertToSrcPath =
  (directory) =>
    path.join(SHARED_DIRECTORY, directory, DIRECTORIES.SRC)

const eslintConfigPaths = fs.readdirSync(PACKAGE_DIRECTORY)
  .filter(isEslintConfigDirectory)
  .map(convertToLibsPath(DIRECTORIES.DEST_CONFIG))
const eslintPluginPaths = fs.readdirSync(PACKAGE_DIRECTORY)
  .filter(isEslintPluginDirectory)
  .map(convertToLibsPath(DIRECTORIES.DEST_PLUGIN))
const sharedPaths = fs.readdirSync(SHARED_DIRECTORY)
  .filter(isSharedDirectory)
  .map(convertToSrcPath)

sharedPaths.forEach((sharedPath) => {
  if (sharedPath.includes(DIRECTORIES.ESLINT_CONFIG)) {
    eslintConfigPaths.forEach((configPath) => {
      const existsTarget = fs.existsSync(configPath)
      const fsMethod = getFsMethod(existsTarget)
      fs[fsMethod](configPath, { recursive: true })

      getFilePaths(sharedPath)
        .map(getFilePath(DIRECTORIES.SRC))
        .forEach(copyFile(sharedPath, configPath))
    })
  }
  if (sharedPath.includes(DIRECTORIES.ESLINT_PLUGIN)) {
    eslintPluginPaths.forEach((pluginPath) => {
      const existsTarget = fs.existsSync(pluginPath)
      const fsMethod = getFsMethod(existsTarget)
      fs[fsMethod](pluginPath, { recursive: true })

      getFilePaths(sharedPath)
        .map(getFilePath(DIRECTORIES.SRC))
        .forEach(copyFile(sharedPath, pluginPath))
    })
  }
})

console.log("Finished the shared files copy.")
