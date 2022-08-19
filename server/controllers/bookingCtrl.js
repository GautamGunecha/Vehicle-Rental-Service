const Bookings = require("../models/bookingModel");
const Cars = require("../models/vehicleModel");
const asyncHandler = require("express-async-handler");

const createBooking = asyncHandler(async (req, res) => {
  try {
    const newBooking = new Bookings(req.body);

    const car = await Cars.findOne({ _id: req.body.car });
    car.bookingSlote.push(req.body.bookedTimeSlots);

    await car.save();
    await newBooking.save();
    res.status(200).json({ msg: "Car booked successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = { createBooking };
