const ContactModel = require("../database/models/ContactModel");

module.exports = class ContactRepository {
  static async save(contact) {
    const newContact = new ContactModel(contact);
    await newContact.save();
  }

  static async getAll() {
    return await ContactModel.find({});
  }

  static async getById(id) {
    const contact = await ContactModel.findById(id);
    return contact;
  }

  static async delete(id) {
    const contact = await ContactModel.findByIdAndDelete(id);
    return contact;
  }
};
