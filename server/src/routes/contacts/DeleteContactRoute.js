const { Route } = require("../Route");

module.exports = class DeleteContactRoute extends Route {
  execute() {
    this.router.delete("/:id", async (req, res) => {
    //   await collection.deleteOne({
    //     _id: new ObjectId(req.params.id),
    //   });
      res.send("Contacto eliminado");
    });
  }
};
