//Importando cliente de MongoDB
const { MongoClient } = require("mongodb");

//Clase MongoDB
class MongoDB {
  constructor() {
    this.url = "mongodb://localhost:27017";
    this.client = new MongoClient(this.url);
    this.name = "Contacts";
    this.db = this.client.db(this.name);
  }

  async init() {
    // Usar el método "concetar" para conectarse a la base de datos
    await this.client.connect();
    console.log("Conexión exitosa al servidor");
  }

  instance() {
    return this.db;
  }
}

module.exports = MongoDB;
