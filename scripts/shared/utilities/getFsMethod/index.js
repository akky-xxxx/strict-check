const getFsMethod = (existsTarget) => (existsTarget ? "rmSync" : "mkdirSync")

module.exports = {
  getFsMethod,
}
