const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ContactModel = mongoose.model("Contact", contactSchema);
module.exports = ContactModel;
