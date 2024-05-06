const { Route } = require("../Route");
const ContactRepository = require("../../repository/ContactRepository");

module.exports = class GetContactRoute extends Route {
  execute() {
    this.router.get("/:id", async (req, res) => {
      const id = req.params.id;
      const contact = await ContactRepository.getById(id);
      res.send(contact);
    });
  }
};
