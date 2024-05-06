const { Route } = require("../Route");
const ContactRepository = require("../../repository/ContactRepository");

module.exports = class GetContactsRoute extends Route {
  execute() {
    this.router.get("/", async (req, res) => {
      const contacts = await ContactRepository.getAll();
      res.send(contacts);
    });
  }
};
