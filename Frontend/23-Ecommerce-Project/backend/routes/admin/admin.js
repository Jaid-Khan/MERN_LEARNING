const express = require("express");
const auth = require("./auth");
const main = require("./main");
const admin = express.Router();

admin.use("/auth", auth);
admin.use("/", main)


module.exports = admin;