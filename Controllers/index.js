// const restaurantList = require("../Models/restaurants");
// // const mealTypes = require("../Models/mealtypes.json");


// exports.getAllRestaurants = (req, res) => {
//     res.status(200).json(restaurantList);
// }

// exports.getRestaurantById = (req, res) => {
//     const restaurantId = req.params.id;
//     const restaurant = restaurantList.find(value =>  value.id == restaurantId);

//     if (restaurant) {
//         res.status(200).json({ restaurant: restaurant });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid restaurant ID"
//         });
//     }
// }

// exports.getRestaurantsByCity = (req, res) => {
//     const city = req.params.city;

//     // const filteredRestaurants = restaurantList.filter(rest => rest.city == city);
//     const filteredRestaurants = restaurantList.filter(rest => rest.city.toLowerCase() === city.toLowerCase());


//     if (filteredRestaurants.length > 0) {
//         res.status(200).json({ restaurantList: filteredRestaurants });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid City Name"
//         });
//     } 
// }

// // exports.getAllMealTypes((req, res) => {
// //     // send back the mealtypes
// // });

const Restaurant = require("../Models/restaurants"); // This is your Mongoose model

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find(); // Fetch from MongoDB
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Error fetching restaurants" });
    }
};

// Get restaurant by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ error: "Error fetching restaurant" });
    }
};

// Get restaurants by city
exports.getRestaurantsByCity = async (req, res) => {
    try {
        const city = req.params.city.toLowerCase();
        const restaurants = await Restaurant.find({
            "address.city": { $regex: new RegExp(`^${city}$`, "i") }
        });
        if (restaurants.length === 0) {
            return res.status(404).json({ message: "No restaurants in this city" });
        }
        res.status(200).json({ restaurantList: restaurants });
    } catch (error) {
        res.status(500).json({ error: "Error fetching by city" });
    }
};
