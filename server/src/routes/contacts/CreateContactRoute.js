const { Route } = require("../Route");

module.exports = class CreateContactRoute extends Route {
  execute() {
    this.router.post("/", (req, res) => {
      res.send("Todo correcto");
    });
  }
};
