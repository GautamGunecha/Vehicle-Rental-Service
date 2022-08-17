const Car = require('../models/vehicleModel')
const asyncHandler = require('express-async-handler')

const addNewCar = asyncHandler(async (req, res) =>
{
    const newCar = new Car(req.body)
    try
    {
        const savedCar = await newCar.save();
        return res.status(200).json(savedCar);
    } catch (error)
    {
        return res.status(400).json({ msg: error });
    }
})

const getAllCars = asyncHandler(async (req, res) =>
{
    const cars = await Car.find()
    return res.status(200).json(cars)
})

const getSingleCar = asyncHandler(async (req, res) =>
{
    try
    {
        const car = await Car.findById(req.params.id)
        return res.status(200).json(car)
    } catch (error)
    {
        return res.status(400).json({ msg: error })
    }
})

const updateCarDetails = asyncHandler(async (req, res) => { })

const removeCar = asyncHandler(async (req, res) => { })




module.exports = { addNewCar, updateCarDetails, removeCar, getAllCars, getSingleCar }