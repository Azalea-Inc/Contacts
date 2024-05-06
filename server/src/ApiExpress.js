const express = require("express");
const bodyParser = require("body-parser");

module.exports = class ApiExpress {
  constructor(port) {
    this.port = port;
    this.app = express();
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
      console.log(`Server listen on port ${this.port}`);
    });
  }
};
