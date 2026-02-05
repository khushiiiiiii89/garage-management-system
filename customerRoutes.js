const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const { getCustomers, createCustomer } = require('../controllers/customerController');

router.get('/', protect, getCustomers);
router.post('/', protect, createCustomer);

module.exports = router;
