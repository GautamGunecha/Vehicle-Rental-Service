const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    model: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    aboutCar: {
        type: String,
        required: true,
        max: 300
    },
    fuelType: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    rentPHour: {
        type: Number,
        required: true
    },
    nSeater: {
        type: Number,
        required: true
    },
    bookingSlote: {
        type: Array,
        default: []
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

module.exports = mongoose.model('cars-collections', vehicleSchema)