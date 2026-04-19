const express = require("express");
const app = express();
const user = require("./routes/userRoutes")
const cookie = require("cookie-parser")

app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", user)





module.exports = app;