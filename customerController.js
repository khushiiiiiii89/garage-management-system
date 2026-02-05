const Customer = require('../models/Customer');

exports.getCustomers = async (req, res) => {
  res.json(await Customer.find());
};

exports.createCustomer = async (req, res) => {
  res.json(await Customer.create(req.body));
};
