const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
