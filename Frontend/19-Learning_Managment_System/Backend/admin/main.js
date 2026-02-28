const express = require('express');
const admin = express.Router();
const auth = require("./auth");

admin.use("/auth", auth);

admin.get("/", (req, res)=>{
    res.send("This is Admin Home Route");
})



module.exports = admin;