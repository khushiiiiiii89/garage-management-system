const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  licensePlate: String,
  make: String,
  model: String,
  year: Number,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
