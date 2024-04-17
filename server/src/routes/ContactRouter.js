const { ObjectId } = require("mongodb");
const CreateContactRoute = require("./contacts/CreateContactRoute");
const DeleteContactRoute = require("./contacts/DeleteContactRoute");

class ContactRouter {
  constructor(app) {
    this.app = app;

    this.router = require("express").Router();
  }

  execute() {
    new CreateContactRoute(this.router).execute();
    new DeleteContactRoute(this.router).execute();

    this.app.use("/contacts", this.router);
  }
}

module.exports = { ContactRouter };

// module.exports = (DB) => {
//   // const collection = DB.collection("Contacts");
//   //Creando rutas

//   // Añadir contacto
//   // router.post("/", async (req, res) => {
//   //   try {
//   //     const data = req.body;

//   //     const exist = await collection.findOne({
//   //       email: req.body.email,
//   //     });

//   //     if (exist) throw new Error("Usuario repetida");

//   //     await collection.insertOne({ name: data.name, age: data.age });
//   //     res.send("Contacto agregado");
//   //   } catch (error) {
//   //     res.send(error.message);
//   //   }
//   // });

//   //Mostrar contactos
//   router.get("/", async (req, res) => {
//     // const contacts = await collection.find().toArray();
//     const contacts = [{ name: "Joan" }];
//     res.send(contacts);
//   });

//   //Detalle de contacto
//   router.get("/:id", async (req, res) => {
//     const contact = await collection.findOne({
//       _id: new ObjectId(req.params.id),
//     });
//     res.send(contact);
//   });

//   //Actualizar contacto
//   router.put("/:id", async (req, res) => {
//     let data = req.body;
//     await collection.updateOne(
//       { _id: new ObjectId(req.params.id) },
//       { $set: { ...data } }
//     );
//     res.send("Actualizando contacto con id " + req.params.id);
//   });

//   return router;
// };
