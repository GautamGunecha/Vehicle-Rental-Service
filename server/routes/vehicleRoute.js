const router = require('express').Router()
const { addNewCar, getAllCars, removeCar, updateCarDetails, getSingleCar } = require('../controllers/vehicleCtrl')
const { adminVerification } = require('../middlewares/auth')

router.post('/add', adminVerification, addNewCar)
router.get('/getallcars', getAllCars)
router.get('/getcar/:id', getSingleCar)

module.exports = router