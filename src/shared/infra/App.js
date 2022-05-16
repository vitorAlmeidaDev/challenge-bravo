const express = require("express");
const helmet = require("helmet");
const config = require("../config/environment.js");
const http = require("http");
const routes = require("./routes");

class App {
  serverPort = config.service.port;
  /**
   * App constructor
   */
  constructor() {
    this.app = express();
  }

  /**
   * App's main function.
   *
   * @returns {Promise<void>}
   */
  async main() {
    await this.startServer();
    await this.startDb();
    this.startCron();
  }

  /**
   * Starts
   *
   * @returns {Promise<void>}
   */
  async startServer() {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(routes);
    this.server = http.createServer(this.app);
    this.server.listen(this.serverPort, () => {
      console.log(`server listening on port ${this.serverPort}`);
    });
  }

  async startDb() {
    if (config.node_env !== "test") {
      require("../config/mongo");
    }
  }

  startCron() {
    if (config.node_env !== "test") {
      require("../../jobs/index");
    }
  }

  getServer() {
    return this.server;
  }
}

module.exports = App;
