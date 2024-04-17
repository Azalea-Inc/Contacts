const ApiExpress = require("./ApiExpress");

class ContactApp {
  static main() {
    const api = new ApiExpress(3000);

    api.initialize();
    api.setup();
    api.start();
  }
}

ContactApp.main();
