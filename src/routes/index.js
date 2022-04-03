const router = require("express").Router()
const CustomerController = require("../controllers/customers")


//GET
router.get("/", (req, res)=>{
    res.render("home", {
        title: "Home"
    })
})
router.get("/register", (req, res)=>{
    res.render("register", {
        title: "Register Clients"
    })
})


//POST
router.post("/register/add", CustomerController.add)


//EXPORTING
module.exports = router