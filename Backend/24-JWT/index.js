const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/JWT-Practice")
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
});

const User = mongoose.model("Users", userSchema);

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
  if (user == undefined) {
    return res.send("User not found");
  } else {
    encryptedToken = jwt.sign({ user: user._id }, "Zeroid@12321");
    res.cookie("token", encryptedToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.send("User logged in successfully");
  }
});

app.get("/profile", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.send("No token found, please log in");
  } else {
    decryptedToken = jwt.verify(token, "Zeroid@12321");
    const user = await User.findById(decryptedToken.user);
    res.send(`Welcome to your profile, ${user.name}`);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
