const restaurantList = require("../Models/restaurants");
// const mealTypes = require("../Models/mealtypes.json");


exports.getAllRestaurants = (req, res) => {
    res.status(200).json(restaurantList);
}

exports.getRestaurantById = (req, res) => {
    const restaurantId = req.params.id;
    const restaurant = restaurantList.find(value =>  value.id == restaurantId);

    if (restaurant) {
        res.status(200).json({ restaurant: restaurant });
    } else {
        res.status(404).json({
            message: "Please provide valid restaurant ID"
        });
    }
}

exports.getRestaurantsByCity = (req, res) => {
    const city = req.params.city;

    // const filteredRestaurants = restaurantList.filter(rest => rest.city == city);
    const filteredRestaurants = restaurantList.filter(rest => rest.city.toLowerCase() === city.toLowerCase());


    if (filteredRestaurants.length > 0) {
        res.status(200).json({ restaurantList: filteredRestaurants });
    } else {
        res.status(404).json({
            message: "Please provide valid City Name"
        });
    } 
}

// exports.getAllMealTypes((req, res) => {
//     // send back the mealtypes
// });