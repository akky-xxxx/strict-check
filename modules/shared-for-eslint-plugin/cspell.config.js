module.exports = {
  version: "0.2",

  dictionaries: ["packages"],
  dictionaryDefinitions: [
    {
      name: "packages",
      path: "./config/cspell/packages.txt",
    },
  ],
  ignorePaths: ["node_modules/**"],
  language: "en",
}
