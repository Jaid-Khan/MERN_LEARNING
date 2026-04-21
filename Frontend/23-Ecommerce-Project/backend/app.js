require("dotenv").config()
const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json);
app.use(express.static("public"))
app.use(express.static("upload"))


app.get("/", (req, res)=>{
    res.send("Home")
})

module.exports = app;