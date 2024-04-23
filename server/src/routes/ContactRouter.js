const { ObjectId } = require("mongodb");
const CreateContactRoute = require("./contacts/CreateContactRoute");
const GetContactsRoute = require("./contacts/GetContactsRoute");
const GetContactRoute = require("./contacts/GetContactRoute");
const UpdateContactRoute = require("./contacts/UpdateContactRoute");
const DeleteContactRoute = require("./contacts/DeleteContactRoute");

class ContactRouter {
  constructor(app) {
    this.app = app;

    this.router = require("express").Router();
  }

  execute() {
    new CreateContactRoute(this.router).execute();
    new GetContactsRoute(this.router).execute();
    new GetContactRoute(this.router).execute();
    new UpdateContactRoute(this.router).execute();
    new DeleteContactRoute(this.router).execute();

    this.app.use("/contacts", this.router);
  }
}

module.exports = { ContactRouter };