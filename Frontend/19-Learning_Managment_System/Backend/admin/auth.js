const express = require("express");
const auth = express.Router();

auth.get("/",(req, res)=>{
    res.send("This is Admin Auth Home Route");
})

auth.post("/login",(req, res)=>{
    res.send("This is Admin Login Route");
})

auth.post("forgot-password",(req, res)=>{
    res.send("This is Admin Forgot Password Route");
})

module.exports = auth;