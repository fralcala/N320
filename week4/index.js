const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

// function includeFunctionFolder(callback) {
//   app.question("Include functions (Y/n:", function (userAnswer) {
//     const cleanedAnswer = userAnswer.trim().toLowerCase();
//     if (userAnswer === "y" || !userAnswer) {
//       // do this
//       callback();
//     } else {
//       includeFunctionFolder(callback);
//     }
//   });
// }

app.question("Name of project:", function (projectName) {
  // const baseDirectory =
  //   process.env.TEST === "1" ? path.resolve("output") : process.cwd();
  const projectDirectory = path.join("output", projectName);
  const functionsDirectory = path.join(projectDirectory, "functions");
  const readmeFile = path.join(projectDirectory, "README.md");

  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory);
  }

  if (!fs.existsSync(functionsDirectory)) {
    fs.mkdirSync(functionsDirectory);
  }

  fs.writeFileSync(readmeFile, "## Project Name");

  app.close();
});
