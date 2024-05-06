const { Route } = require("../Route");
const ContactRepository = require("../../repository/ContactRepository");

module.exports = class DeleteContactRoute extends Route {
  execute() {
    this.router.delete("/:id", async (req, res) => {
      const { id } = req.params;
      await ContactRepository.delete(id);
      res.send("Contacto eliminado");
    });
  }
};
