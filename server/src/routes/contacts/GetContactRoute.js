const { Route } = require("../Route");

module.exports = class GetContactRoute extends Route {
  execute() {
    this.router.get("/:id", async (req, res) => {
      //   await collection.deleteOne({
      //     _id: new ObjectId(req.params.id),
      //   });
      res.send("Contacto con id " + req.params.id);
    });
  }
};