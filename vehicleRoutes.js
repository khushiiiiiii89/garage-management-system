const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const { getVehicles, createVehicle } = require('../controllers/vehicleController');

router.get('/', protect, getVehicles);
router.post('/', protect, createVehicle);

module.exports = router;
