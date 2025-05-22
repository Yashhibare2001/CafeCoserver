const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
        coordinates: {
            lat: Number,
            lng: Number
        }
    },
    cuisine: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    phone: String,
    website: String,
    openingHours: [String],
    priceRange: String,
    features: [String],
    imageUrl: String,
    reviews: [
        {
            user: String,
            comment: String,
            rating: { type: Number, min: 0, max: 5 },
            date: Date
        }
    ]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);