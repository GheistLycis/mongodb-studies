const CustomersModel = require("../models/customers")
const {crypto} = require("../utils/password")

const title = "Register Clients"

function index(req, res){
    res.render("register", {
        title
    })
}

async function listUsers(req, res){
    const users = await CustomersModel.find()

    res.render("list-users", {
        title: "List of Clients",
        users
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })
    
    register.save()

    res.render("register", {
        title,
        registered: true
    })
}

module.exports = {
    index, 
    listUsers,
    add
}