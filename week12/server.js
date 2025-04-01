const express = require("express");
const path = require("path");

// Create an express app
const app = express();

app.use(
  express.static(
    path.join(__dirname, "views") //
  )
);

// app.app.get("/", function (req, res) {
//   res.send("<h1>Home</h1>");
// });

app.get("/*page/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/404.html"));
});

const port = process.env.PORT || 15198;

app.listen(port);

console.log(`Server running:http://localhost:${port}`);
