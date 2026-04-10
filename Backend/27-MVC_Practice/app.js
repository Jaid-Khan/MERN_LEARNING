const express = require("express");
const app = express();
const user = require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/",(req, res)=>{
    res.render("home");
})

app.use("/user", user)





module.exports = app;