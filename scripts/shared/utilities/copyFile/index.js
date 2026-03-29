const fs = require("fs")
const path = require("path")

const FIRST_CHARACTER = 0

const copyFile = (from, to) => (thisPath) => {
  const sourcePath = path.join(from, thisPath)
  // ソースファイルが存在しない場合はスキップ（並列実行時の削除を考慮）
  if (!fs.existsSync(sourcePath)) {
    return
  }

  try {
    const toPath = path.join(to, thisPath)
    const expectDirectory = toPath.slice(FIRST_CHARACTER, toPath.lastIndexOf("/"))
    if (!fs.existsSync(expectDirectory)) {
      fs.mkdirSync(expectDirectory, { recursive: true })
    }
    fs.copyFileSync(sourcePath, toPath)
  } catch {
    // コピー失敗時は無視（並列実行時の競合を考慮）
  }
}

module.exports = {
  copyFile,
}
