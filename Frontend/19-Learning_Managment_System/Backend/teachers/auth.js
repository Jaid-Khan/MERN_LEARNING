const express = require("express");
const auth = express.Router();

auth.get("/",(req, res)=>{
    res.send("This is Teacher Auth Home Route");
})

auth.post("/login",(req, res)=>{
    res.send("This is Teacher Login Route");
})

auth.post("forgot-password",(req, res)=>{
    res.send("This is Teacher Forgot Password Route");
})

module.exports = auth;