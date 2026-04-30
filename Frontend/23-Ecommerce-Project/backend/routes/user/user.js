const express = require("express");
const auth = require("./auth");
const main = require("./main");
const user = express.Router();

user.use("/auth", auth);
user.use("/", main)


module.exports = user;