const express = require("express");
const main = express.Router();

main.get("/", (req, res)=>{
    res.send("This is admin Main Home")
})

module.exports = main;