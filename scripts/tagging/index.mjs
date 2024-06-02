import childProcess from "child_process"
import fs from "fs"

/* eslint-disable no-magic-numbers */
const tagging = () => {
  const currentBranch = childProcess
    .execSync("git branch -l | sed -e \"/^[^*] /d\"")
    .toString()
    .replace("*", "")
    .trim()

  if (currentBranch !== "main") {
    console.log("Do tagging at main branch.")
    process.exit(1)
    return
  }

  const packageJson = JSON.parse(fs.readFileSync("package.json").toString())
  const packageName = packageJson.name.slice(packageJson.name.lastIndexOf("/") + 1)
  const version = `${packageName}/v${packageJson.version}`
  const commands = [`git tag ${version}`, `git push origin tags/${version}`]

  commands.forEach((command) => {
    childProcess.execSync(command)
  })
}

tagging()
