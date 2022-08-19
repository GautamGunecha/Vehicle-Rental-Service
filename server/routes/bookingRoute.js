const router = require("express").Router();
const {
  createBooking,
  getAllBookings,
  getUserBookings,
} = require("../controllers/bookingCtrl");
const { auth, adminVerification } = require("../middlewares/auth");

router.post("/", auth, createBooking);
router.get("/get/all", adminVerification, getAllBookings);
router.get("/user/:userId", auth, getUserBookings);

module.exports = router;
