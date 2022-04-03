const router = require("express").Router()

//GET
router.get("/", (req, res)=>{
    res.render("home", {
        title: "Home"
    })
})


//POST



//PUT



//DELETE



//EXPORTING
module.exports = router