const Service = require('../models/ServiceRequest');

exports.getServices = async (req, res) => {
  res.json(await Service.find().populate('vehicle'));
};

exports.createService = async (req, res) => {
  res.json(await Service.create(req.body));
};
