const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/Cookies-Practice")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  password: String,
  token: String,
});

const User = mongoose.model("Users", userSchema);

// Random String Generator
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { name, contact, password } = req.body;
  const newUser = await User.create({
    name: name,
    contact: contact,
    password: password,
  });
  console.log(newUser);
  res.send("User signed up successfully");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ contact: req.body.contact });
  const token = generateRandomString(16);
  if (user == undefined) {
    res.send("No User Found");
  } else {
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    req.cookies.token = token;
    await User.updateOne({contact: req.body.contact}, {token: token})
    // console.log(req.cookies.token);
    res.send(`Hello ${user.name}`)
  }
});

app.get("/profile", async (req, res) => {
  const validateToken = await User.findOne({token: req.cookies.token})
  if(validateToken != undefined){
    res.send("This Is profile")
  }else{
    res.redirect("/login")
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
