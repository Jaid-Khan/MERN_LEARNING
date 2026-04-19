const { createUser } = require("../models/user/userCrud");
const bcrypt = require("bcrypt");

function generateToken() {
  const length = 16;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars[randomIndex];
  }

  return token;
}


function postSignup(req, res) {
  const { name, email, contact, password, gender } = req.body;
  const profile = req.file.filename;
  
  const token = generateToken();
  const saltRounds = 10;
  
  bcrypt.hash(password, saltRounds).then(function (hashedPassword) {
    createUser(
      name,
      email,
      contact,
      hashedPassword,
      profile,
      gender,
      token,
    );
  });

  res.cookie("token", token)

  res.send("Form Submitted");
}

module.exports = postSignup;
