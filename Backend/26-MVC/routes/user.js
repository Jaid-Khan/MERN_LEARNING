const user = require("express").Router();
const home = require("../controllers/user/home")

user.get("/", home)

module.exports = user;