const { Route } = require("../Route");

module.exports = class GetContactsRoute extends Route {
  execute() {
    this.router.get("/", async (req, res) => {
      //   await collection.deleteOne({
      //     _id: new ObjectId(req.params.id),
      //   });
      res.send("Contactos");
    });
  }
};
