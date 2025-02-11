// Ask the user if they want to continue
// If they do then wait 2 seconds(2000ms)
// Then ask them again
// Else close the app

// things to use readline, set timeout

const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkContinue() {
  app.question(
    `Do you want to continue?
    1. Yes
    2. No`,
    function (userAnswer) {
      if (userAnswer === 1) {
        setTimeout(function () {
          checkContinue();
        }, 2000);
      } else {
        app.close();
      }
    }
  );
}

checkContinue();
