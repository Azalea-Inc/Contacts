const { Route } = require("../Route");

module.exports = class UpdateContactRoute extends Route {
  execute() {
    this.router.put("/:id", async (req, res) => {
      res.send("Actualizando contacto con id " + req.params.id);
    });
  }
};
