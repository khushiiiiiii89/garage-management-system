const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  description: String,
  status: {
    type: String,
    default: 'Pending'
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  },
  cost: Number
}, { timestamps: true });

module.exports = mongoose.model('ServiceRequest', serviceSchema);
