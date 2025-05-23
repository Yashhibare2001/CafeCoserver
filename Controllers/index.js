const Restaurant = require('../Models/restaurants');
const EmployeeBooking = require('../Models/employeeBooking');

// Fetch all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurants' });
  }
};

// Fetch restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ restaurant });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurant' });
  }
};

// Fetch restaurants by city
exports.getRestaurantsByCity = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();
    const restaurants = await Restaurant.find({
      "address.city": { $regex: new RegExp(`^${city}$`, "i") }
    });
    if (restaurants.length === 0) return res.status(404).json({ message: 'No restaurants in this city' });
    res.status(200).json({ restaurantList: restaurants });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching by city' });
  }
};

// Save employee booking
exports.saveEmployeeBooking = async (req, res) => {
  try {
    const { referenceId, date, mealType, items } = req.body;
    if (!referenceId || !date || !mealType || !items || items.length === 0) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBooking = new EmployeeBooking({ referenceId, date, mealType, items });
    await newBooking.save();
    res.status(200).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    res.status(500).json({ message: 'Failed to save booking' });
  }
};
