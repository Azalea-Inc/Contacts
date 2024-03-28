//Importando librerías
const express = require("express");

console.log(express)

//Creando una instancia de express
const app = express();

//Importando routers
const contactRouter = require("./routes/contacts");

//Empaquetando router en la applicación
app.use("/contacts", contactRouter);

app.listen(3000, ()=> {
    console.log("Server listen on port 3000");
})