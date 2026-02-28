const express = require('express');
const student = express.Router();
const auth = require("./auth");

student.use("/auth", auth);

student.get("/", (req, res)=>{
    res.send("This is Student Home Route");
})



module.exports = student;