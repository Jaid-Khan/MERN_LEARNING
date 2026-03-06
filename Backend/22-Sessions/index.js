const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/Sessions-Practice")
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

app.use(
  session({
    secret: "mernstack",
    resave: false,
    saveUninitialized: false,
  }),
);

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
  if (user != undefined) {
    let token = generateRandomString(12);
    console.log(token);
    await User.updateOne({ contact: req.body.contact }, { token: token });
    req.session.token = token;
    return res.send("User logged in successfully");
  }
  console.log(req.session.token);
  res.send("Invalid contact or password");
});

app.get("/profile", async (req, res) => {
    const user = await User.findOne({token:req.session.token});
    if(user){
        res.send("This is Profile");
    }else{
        res.redirect("/login");
    }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
