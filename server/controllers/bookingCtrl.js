const Bookings = require("../models/bookingModel");
const asyncHandler = require("express-async-handler");

const createBooking = asyncHandler(async (req, res) => {
  try {
    const newBooking = new Bookings(req.body);

    await newBooking.save();
    res.status(200).json({ msg: "Car booked successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = { createBooking };
