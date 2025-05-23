const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.get('/restaurants', controller.getAllRestaurants);
router.get('/restaurants/:id', controller.getRestaurantById);
router.get('/getRestaurantsByCity/:city', controller.getRestaurantsByCity);

router.post('/employee/booking', controller.saveEmployeeBooking);

module.exports = router;
