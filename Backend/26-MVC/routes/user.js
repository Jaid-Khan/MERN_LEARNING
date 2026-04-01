const user = require("express").Router();
const home = require("../controllers/user/home")
const {signup, post_signup} = require("../controllers/user/signup")


user.get("/", home)
user.get("/signup", signup)
user.post("/signup", post_signup)

module.exports = user;