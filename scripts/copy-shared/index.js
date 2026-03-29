const fs = require("fs")
const path = require("path")

const { DIRECTORIES } = require("../shared/constants/DIRECTORIES")
const { copyFile } = require("../shared/utilities/copyFile")
const { getFilePath } = require("../shared/utilities/getFilePath")
const { getFilePaths } = require("../shared/utilities/getFilePaths")

const ROOT = path.resolve(__dirname, "../../")

const SHARED_DIRECTORY =
  path.join(ROOT, DIRECTORIES.WS_MODULES)
const PACKAGE_DIRECTORY =
  path.join(ROOT, DIRECTORIES.WS_PACKAGES)

const isEslintConfigDirectory = (directory) => directory.includes(DIRECTORIES.ESLINT_CONFIG)
const isEslintPluginDirectory = (directory) => directory.includes(DIRECTORIES.ESLINT_PLUGIN)
const isSharedDirectory = (directory) => directory.startsWith(DIRECTORIES.SHARED_PREFIX)

const convertToLibsPath = (destName) => (directory) => path.join(
  PACKAGE_DIRECTORY,
  directory,
  DIRECTORIES.SRC,
  DIRECTORIES.LIBS,
  destName,
)
const convertToSrcPath =
  (directory) => path.join(SHARED_DIRECTORY, directory, DIRECTORIES.SRC)

// ディレクトリ配下のファイル・フォルダを削除する関数（再帰的）
const clearDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    return
  }

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    entries.forEach((entry) => {
      const fullPath = path.join(dirPath, entry.name)
      try {
        if (entry.isDirectory()) {
          clearDirectory(fullPath)
        }
        const remove = entry.isDirectory() ? fs.rmdirSync : fs.unlinkSync
        remove(fullPath)
      } catch {
        // 削除失敗時は無視
      }
    })
  } catch {
    // ディレクトリ読み込み失敗時は無視
  }
}

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
      if (fs.existsSync(configPath)) {
        clearDirectory(configPath)
      } else {
        fs.mkdirSync(configPath, { recursive: true })
      }

      getFilePaths(sharedPath)
        .map(getFilePath(DIRECTORIES.SRC))
        .forEach(copyFile(sharedPath, configPath))
    })
  }
  if (sharedPath.includes(DIRECTORIES.ESLINT_PLUGIN)) {
    eslintPluginPaths.forEach((pluginPath) => {
      if (fs.existsSync(pluginPath)) {
        clearDirectory(pluginPath)
      } else {
        fs.mkdirSync(pluginPath, { recursive: true })
      }

      getFilePaths(sharedPath)
        .map(getFilePath(DIRECTORIES.SRC))
        .forEach(copyFile(sharedPath, pluginPath))
    })
  }
})

console.log("Finished the shared files copy.")
