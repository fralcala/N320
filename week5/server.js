const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * @param {http.ClientRequest}req
 * @param {http.ServerResponse} res
 */
function app(req, res) {
  res.write("hi");
  res.end();
}

const server = http.createServer(app);
