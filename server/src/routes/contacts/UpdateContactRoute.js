const { Route } = require("../Route");

module.exports = class UpdateContactRoute extends Route {
  execute() {
    this.router.put("/:id", async (req, res) => {
    //   let data = req.body;
    //   await collection.updateOne(
    //     { _id: new ObjectId(req.params.id) },
    //     { $set: { ...data } }
    //   );
      res.send("Actualizando contacto con id " + req.params.id);
    });
  }
};
