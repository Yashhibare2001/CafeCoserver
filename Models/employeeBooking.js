const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  referenceId: { type: String, required: true },
  date: { type: String, required: true },
  mealType: { type: String, required: true },
  items: [
    {
      name: String,
      restaurant: String,
      quantity: Number,
      price: Number
    }
  ]
});

module.exports = mongoose.model('EmployeeBooking', bookingSchema);
