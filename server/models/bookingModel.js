const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    car: {
      type: Schema.Types.ObjectId,
      ref: "cars-collections",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookedTimeSlots: {
      pickUpDate: {
        type: String,
      },
      dropDate: {
        type: String,
      },
    },
    totalHours: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking Details", bookingSchema);
