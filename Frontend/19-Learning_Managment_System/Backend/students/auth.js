const express = require("express");
const auth = express.Router();

auth.get("/",(req, res)=>{
    res.send("This is Student Auth Home Route");
})

auth.post("/login",(req, res)=>{
    res.send("This is Student Login Route");
})

auth.post("forgot-password",(req, res)=>{
    res.send("This is Student Forgot Password Route");
})

module.exports = auth;