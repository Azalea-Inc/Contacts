const Api = require("./Api");

const express = require("express");
const bodyParser = require("body-parser");
const MongoDB = require("./database/mongoDB");

module.exports = class ApiExpress extends Api {
  constructor(port) {
    super();
    this.port = port;

    this.app = express();
    // this.DB = new MongoDB();
  }

  initialize() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  setup() {
    const { ContactRouter } = require("./routes/ContactRouter");

    new ContactRouter(this.app).execute();
  }

  start() {
    this.app.listen(this.port, async () => {
      // await this.DB.init();
      console.log(`Server listen on port ${this.port}`);
    });
  }
};
