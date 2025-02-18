const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile");
/**
 * @param {http.ClientRequest}req
 * @param {http.ServerResponse} res
 */
function app(req, res) {
  const fileReq = new WebFile("style.css");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2>Hi there, partner 🤠!</h2>");
  res.write(`<p>${fileReq.getMimeType()}</p>`);
  res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445; //3000,3001,

server.listen(port);
