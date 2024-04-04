const { ObjectId } = require("mongodb");

//Creando el router
const router = require("express").Router();

module.exports = (DB) => {
  const collection = DB.collection("Contacts");
  //Creando rutas
  //Añadir contacto
  router.post("/", async (req, res) => {
    const data = req.body;
    await collection.insertOne({ name: data.name, age: data.age });
    res.send("Contacto agregado");
  });

  //Mostrar contactos
  router.get("/", async (req, res) => {
    const contacts = await collection.find().toArray();
    res.send(contacts);
  });

  //Detalle de contacto
  router.get("/:id", async (req, res) => {
    const contact = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.send(contact);
  });

  //Actualizar contacto
  router.put("/:id", (req, res) => {
    res.send("Actualizando contacto con id " + req.params.id);
  });

  //Eliminar contacto
  router.delete("/:id", (req, res) => {
    res.send("Eliminando contacto con id " + req.params.id);
  });

  return router;
};
