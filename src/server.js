const express = require("express")
const path = require("path")

const db = require("./database")
const routes = require("./routes")

const app = express()
app.set("view engine", "ejs")


//SETTING PUBLIC AND VIEWS FOLDERS
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))


//ENABLING SERVER TO RECEIVE POSTS FROM FORMS
app.use(express.urlencoded({extended: true}))


//ROUTES
app.use("/", routes)


//404
app.use((req, res)=>{
    res.send("Page not found... =/")
})


//SETTING SERVER
db.connect()
const port = process.env.PORT || 8080
app.listen(port, ()=>{console.log(`Server on! Port: ${port}`)})