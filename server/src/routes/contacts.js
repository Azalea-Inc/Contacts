//Creando el router
const router = require("express").Router();

//Creando rutas
//Añadir contacto
router.post("/", (req, res) =>{
    res.send("Contacto agregado");
})

//Mostrar contactos
router.get("/", (req, res) =>{
    res.send("Lista de contactos")
})

//Detalle de contacto
router.get("/:id", (req, res) =>{
    res.send("Detalle de contacto con id " + req.params.id)
})

//Actualizar contacto
router.put("/:id", (req, res) =>{
    res.send("Actualizando contacto con id " + req.params.id)
})

//Eliminar contacto
router.delete("/:id", (req, res) =>{
    res.send("Eliminando contacto con id " + req.params.id)
})

//Exportando el router
module.exports = router;