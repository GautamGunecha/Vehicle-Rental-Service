const router = require("express").Router();
const { createBooking } = require("../controllers/bookingCtrl");
const { auth } = require("../middlewares/auth");

router.post("/", auth, createBooking);

module.exports = router;
