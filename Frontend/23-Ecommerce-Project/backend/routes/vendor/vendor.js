const express = require("express");
const auth = require("./auth");
const main = require("./main");
const vendor = express.Router();

vendor.use("/auth", auth);
vendor.use("/", main)


module.exports = vendor;