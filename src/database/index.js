const mongoose = require("mongoose")

function connect(){
    mongoose.connect("mongodb://localhost:27017/first-project")
    const db = mongoose.connection
    db.once("open", ()=>{console.log("DB working")})
    db.on("error", console.error.bind(console, "Error: "))
}

module.exports = {connect}