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

const getCar = asyncHandler(async (req, res) => { })

const updateCarDetails = asyncHandler(async (req, res) => { })

const removeCar = asyncHandler(async (req, res) => { })




module.exports = { addNewCar, updateCarDetails, removeCar, getAllCars, getCar }