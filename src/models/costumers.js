const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model("customers", schema)

/*
const register = new Model({
    name: "Egg",
    age: 0,
    email: "egg@egg.com",
    password: "egg"
})

register.save()
*/

module.exports = model