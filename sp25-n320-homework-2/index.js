const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

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

  app.question(
    "Would you like to add a styles folder? (Y/N)",
    function (userAnswer) {
      if (userAnswer === "Y") {
        const stylesDirectory = path.join(projectDirectory, "styles");

        if (!fs.existsSync(stylesDirectory)) {
          fs.mkdirSync(stylesDirectory);
        }

        console.log("Styles folder created");
        app.close();
      } else {
        console.log("Ok, no styles :(");
        app.close();
      }
    }
  );
});
