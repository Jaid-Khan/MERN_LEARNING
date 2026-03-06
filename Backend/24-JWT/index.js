const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

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
 
});

app.get("/profile", async (req, res) => {
 
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
