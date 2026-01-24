const mongoose = require('mongoose')
const schema = mongoose.Schema
const feedbackSchema = new schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },

}, { timestamps: true })
// 
const PateSchema = new schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    feedbacks: [feedbackSchema]

}, { timestamps: true })
const pate = mongoose.model('Pates', PateSchema)
module.exports = pate