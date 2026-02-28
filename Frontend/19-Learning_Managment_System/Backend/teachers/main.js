const express = require('express');
const teacher = express.Router();
const auth = require("./auth");

teacher.use("/auth", auth);

teacher.get("/", (req, res)=>{
    res.send("This is Teacher Home Route");
})



module.exports = teacher;