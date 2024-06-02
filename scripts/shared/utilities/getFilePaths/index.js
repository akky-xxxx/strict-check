const fs = require("fs")

const getFilePaths = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((dirent) =>
    (dirent.isFile() ? [`${directory}/${dirent.name}`] : getFilePaths(`${directory}/${dirent.name}`)))

module.exports = {
  getFilePaths,
}
