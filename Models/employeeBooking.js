const mongoose = require('mongoose');

const employeeBookingSchema = new mongoose.Schema({
  referenceId: { type: String, required: true },
  date: { type: String, required: true },
  mealType: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      restaurant: String
    }
  ],
});

module.exports = mongoose.model('EmployeeBooking', employeeBookingSchema);
