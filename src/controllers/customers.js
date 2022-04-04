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

async function registerUser(req, res){
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

    res.render("register-user", {
        title,
        message: "User Registered Successfully."
    })
}

async function formEdit(req, res){
    const {id} = req.query
    const user = await CustomersModel.findById(id)

    res.render("edit-user", {
        title: "Edit User",
        user
    })
}

async function editUser(req, res){
    const {
        name,
        age,
        email,
    } = req.body

    //-"req.params" stores the post method vars; "req.query" stores the get vars; "req.body" stores the form vars.
    const {id} = req.params
    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email
    user.save()

    res.render("edit-user", {
        title: "Edit User",
        user,
        message: "User Altered Successfully."
    })    
}

module.exports = {
    index, 
    listUsers,
    registerUser,
    formEdit,
    editUser
}