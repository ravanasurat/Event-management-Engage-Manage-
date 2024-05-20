const mongoose = require('mongoose')

const empshema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const empmodel = mongoose.model("user", empshema)
module.exports = empmodel