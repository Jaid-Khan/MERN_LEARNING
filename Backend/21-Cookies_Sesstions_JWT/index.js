const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
app.set("view engine", "ejs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting database
mongoose
  .connect("mongodb://localhost:27017/authentication")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  password: String,
  token: String,
});

// Mongoose Model
const User = mongoose.model("Users", userSchema);

// Setting up Session
app.use(
  session({
    secret: "zeroid@12321",
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  }),
);

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

// Handling Routes
app.get("/", (req, res) => {
  console.log(req.session);
  res.send("This is Home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ contact: req.body.contact });
  if (user == undefined || user == null) {
    res.send("User not found");
  } else {
    // let token = generateRandomString(12);
    // await User.updateOne({ contact: req.body.contact }, { token: token });
    // req.session.user = token;

    const EncryptedToke = jwt.sign({ user: user._id }, "Zeroid@12321");
    res.cookie("token", EncryptedToke, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    // res.cookie("user", token, {
    //   httpOnly: true,
    //   maxAge: 1000 * 60 * 60 * 24, // 1 day
    // });
    // console.log(req.session);
  }
  console.log(req.cookies.token);
  res.send(`Login successful ${user.name}`);
});

app.get("/profile", async (req, res) => {
  console.log(req.cookies.token);
  const decryptedToken = jwt.verify(req.cookies.token, "Zeroid@12321");
  console.log(decryptedToken);

  // if (req.session.user != undefined) {
  //   if (req.cookies.user != undefined) {
  // const tokenValidate = await User.findOne({ token: req.session.user });
  //     const tokenValidate = await User.findOne({ token: req.cookies.user });
  //     if (tokenValidate != undefined) {
  //       res.send("This is Profile");
  //     } else {
  //       res.redirect("/login");
  //     }
  //   } else {
  //     res.redirect("/login");
  //   }
  res.send("This is Profile");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    contact: req.body.contact,
    password: req.body.password,
  });

  console.log(user);
  res.send("User Created Successfully");
});

// Listening Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
