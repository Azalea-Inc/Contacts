//Importando librerías
const express = require("express");
const MongoDB = require("./database/mongoDB");

//Creando una instancia de express
const app = express();
const DB = new MongoDB();

//Importando routers
const contactRouter = require("./routes/contacts");

//Empaquetando router en la applicación
app.use("/contacts", contactRouter);

app.listen(3000, async ()=> {
    await DB.init();
    console.log("Server listen on port 3000");
})