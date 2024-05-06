const ContactRepository = require("../../repository/ContactRepository");
const { Route } = require("../Route");

module.exports = class CreateContactRoute extends Route {
  execute() {
    this.router.post("/", async (req, res) => {
      await ContactRepository.save(req.body);
      res.send("Contacto creado");
    });
  }
};
