const express = require("express");
const auth = express.Router();

auth.get("/", (req, res)=>{
    res.send("This is Vendor Auth Home")
})

module.exports = auth;