const User = require('../models/User');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ ...user._doc, token: generateToken(user._id) });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && await user.matchPassword(req.body.password)) {
    res.json({ ...user._doc, token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
