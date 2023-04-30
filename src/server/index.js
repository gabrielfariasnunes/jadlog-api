const express = require("express");
const { log } = require("console");
const routes = require("#server/routes");
const { port } = require("#helpers/env");
const server = express();

module.exports = {
  createServer() {
    server.use(routes);
    server.listen(port, () => {
      log(`Running on port ${port}`);
    });
  },
};
