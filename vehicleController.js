const Vehicle = require('../models/Vehicle');

exports.getVehicles = async (req, res) => {
  res.json(await Vehicle.find().populate('customer'));
};

exports.createVehicle = async (req, res) => {
  res.json(await Vehicle.create(req.body));
};
