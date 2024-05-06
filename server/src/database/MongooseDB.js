const mongoose = require("mongoose");

module.exports = class MongooseDB {
  constructor() {
    this.url = "mongodb://localhost:27017/contacts";
  }

  async init() {
    try {
      await mongoose.connect(this.url);
      console.log("Database connected!");
    } catch (error) {
      console.log(error);
    }
  }
};
