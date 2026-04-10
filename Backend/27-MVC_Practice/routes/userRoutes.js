const user = require("express").Router()
const homeController = require("../controllers/homeController")
const loginController = require("../controllers/loginController")
const signupController = require("../controllers/signupController")

user.get("/", homeController)
user.get("/login", loginController)
user.get("/signup", signupController)


module.exports = user;