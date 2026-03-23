const express = require("express");
const auth = express.Router();
const cryptr = require("cryptr"); //For Encrypting and Decrypting Passwords
const { encryptPassword, decryptPassword } = require("../cryptr");
const admins = require("../database/admin");

auth.get("/", (req, res) => {
  res.send("This is Admin Auth Home Route");
});

auth.post("/login", async (req, res) => {
  const contact = req.body.contact;
  const password = req.body.password;

  if (!contact || !password) {
    return res.send({
        res: false,
        alert: "All fields are required",
    });
}

let findAdmin = await admins.findOne({ contact: contact });

  if (!findAdmin) {
    return res.send({
      res: false,
      alert: "User Not Found",
    });
  }

  let decryptedPassword = decryptPassword(findAdmin.password);

  if (decryptedPassword === password) {
    // return res.send("Admin Login Successful");
    // console.log("Admin Login Successful");
    res.cookie("token", findAdmin._id, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: false,
    });
    res.send({ res: true });
  } else {
    // console.log("Login Failed!");
    res.send({
      res: false,
      alert: "Password Incorrect",
    });
  }
});

auth.post("/check-session", (req, res) => {
    const token = req.cookies.token;
    if(token == null || token == undefined){
        res.send({
            res: false,
            alert: "No Session Found",
        });
    }else{
        res.send({
            res: true,
        });
    }
});

auth.post("/forgot-password", (req, res) => {
  res.send("This is Admin Forgot Password Route");
});

module.exports = auth;
