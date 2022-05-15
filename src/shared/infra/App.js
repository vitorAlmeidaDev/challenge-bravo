const express = require("express");
const helmet = require("helmet");
const config = require("../config/environment.js");
const http = require("http");

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
  }

  /**
   * Starts
   *
   * @returns {Promise<void>}
   */
  async startServer() {
    this.app.use(express.json());
    this.app.use(helmet());
    this.server = http.createServer(this.app);
    this.server.listen(this.serverPort, () => {
      console.log(`server listening on port ${this.serverPort}`);
    });
  }

  getServer() {
    return this.server;
  }
}

module.exports = App;
