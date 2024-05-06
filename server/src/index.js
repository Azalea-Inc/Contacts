const ApiExpress = require("./ApiExpress");
const MongooseDB = require("./database/MongooseDB");

class ContactApp {
  static async main() {
    const api = new ApiExpress(3000);
    const DB = new MongooseDB();
    await DB.init();

    api.initialize();
    api.setup();
    api.start();
  }
}

ContactApp.main();
