const Bookings = require("../models/bookingModel");
const Cars = require("../models/vehicleModel");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

const createBooking = asyncHandler(async (req, res) => {
  const { token } = req.body;
  try {
    // payment method
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      req.body.paymentID = payment.source.id;
      const newBooking = new Bookings(req.body);
      const car = await Cars.findOne({ _id: req.body.car });
      car.bookingSlote.push(req.body.bookedTimeSlots);

      await car.save();
      await newBooking.save();
      res.status(200).json({ msg: "Car booked successfully" });
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = { createBooking };
