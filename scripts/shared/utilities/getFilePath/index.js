const getFilePath =
  (slicePoint) =>
    (thisPath) => thisPath.slice(thisPath.lastIndexOf(slicePoint) + slicePoint.length)

module.exports = {
  getFilePath,
}
