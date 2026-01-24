const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/pate_dbB'
const connect = mongoose.connect(url)
module.exports = connect
