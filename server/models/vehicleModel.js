const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vehicleSchema = new Schema({}, { timestamps: true })

module.exports = mongoose.model('cars-collections', vehicleSchema)