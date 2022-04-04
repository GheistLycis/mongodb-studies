const router = require("express").Router()

const CustomersController = require("../controllers/customers")
const IndexController = require("../controllers/index")


//GET
router.get("/", IndexController.index)
router.get("/register", CustomersController.index)
router.get("/list-users", CustomersController.listUsers)


//POST
router.post("/register/add", CustomersController.add)


//EXPORTING
module.exports = router