const router = require("express").Router()

const CustomersController = require("../controllers/customers")
const IndexController = require("../controllers/index")


//GET
router.get("/", IndexController.index)
router.get("/register-user", CustomersController.index)
router.get("/list-users", CustomersController.listUsers)
router.get("/edit-user", CustomersController.formEdit)


//POST
router.post("/register/add", CustomersController.registerUser)
//-":param" is how post method gets a parameter
router.post("/edit-user/:id", CustomersController.editUser)


//EXPORTING
module.exports = router