const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/Engineering")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/submit", async (req, res) => {
  let name = req.query.name;
  let password = req.query.password;
  const newUser = await User.create({
    name: name,
    password: password,
  });

  console.log(newUser);

  res.send("User Created Successfully");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
