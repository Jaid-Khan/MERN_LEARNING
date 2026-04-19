const user = require("express").Router()
const homeController = require("../controllers/homeController")
const loginController = require("../controllers/loginController")
const signupController = require("../controllers/signupController")
const upload = require("../middleware/multerMiddleware")
const postSignup = require("../controllers/postSignupController")
const checkToken = require("../controllers/checkToken")
const postLogin = require("../controllers/postLoginController")

user.get("/", homeController)
user.get("/login", loginController)
user.get("/signup", signupController)


// Post Methods 
user.post("/signup", upload.single("profile"), postSignup)
user.post("/check-token", checkToken)
user.post("/login", postLogin)


module.exports = user;