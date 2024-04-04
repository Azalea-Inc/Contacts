//Importando librerías
const express = require("express");
const bodyParser = require("body-parser");
const MongoDB = require("./database/mongoDB");

//Creando una instancia de express
const app = express();
const DB = new MongoDB();

//Middleware
const bodyParserOptions = { extends: false };
app.use(bodyParser.urlencoded(bodyParserOptions));
app.use(bodyParser.json());

//Importando routers
const contactRouter = require("./routes/contacts");

//Empaquetando router en la applicación
app.use("/contacts", contactRouter(DB.instance()));

app.listen(3000, async () => {
  await DB.init();
  console.log("Server listen on port 3000");
});
