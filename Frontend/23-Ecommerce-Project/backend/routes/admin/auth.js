const express = require("express");
const auth = express.Router();
const checkToken = require("../../controller/admin/checkToken");

auth.post("/check-token", checkToken)

module.exports = auth;