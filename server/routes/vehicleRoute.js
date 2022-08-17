const router = require('express').Router()
const { addNewCar, getAllCars, removeCar, updateCarDetails } = require('../controllers/vehicleCtrl')
const { adminVerification } = require('../middlewares/auth')

router.post('/add', adminVerification, addNewCar)
router.get('/getallcars', getAllCars)

module.exports = router