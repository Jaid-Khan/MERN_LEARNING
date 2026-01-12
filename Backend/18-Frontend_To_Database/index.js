// Import Express framework (used to create server and handle routes)
const express = require("express");

// Import Mongoose (used to connect Node.js with MongoDB)
const mongoose = require("mongoose");

// Create an Express application (this is your server)
const app = express();

// Middleware to serve static files (CSS, JS, images) from "public" folder
// Example: public/style.css → accessible directly in browser
app.use(express.static("public"));

/* =========================
   MongoDB Connection
   ========================= */

// Connect to MongoDB database named "Engineering"
mongoose
  .connect("mongodb://localhost:27017/Engineering") // MongoDB local connection URL
  .then(() => {
    // Runs if MongoDB connects successfully
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    // Runs if there is an error while connecting
    console.error("Error connecting to MongoDB", err);
  });

/* =========================
   Mongoose Schema
   ========================= */

// Create a schema (structure/blueprint) for User documents
const userSchema = new mongoose.Schema({
  // User name field (String type)
  name: String,

  // User password field (String type)
  password: String,
});

/* =========================
   Mongoose Model
   ========================= */

// Create a model using schema
// "User" → collection name will be "users" in MongoDB
const User = mongoose.model("User", userSchema);

/* =========================
   View Engine Setup
   ========================= */

// Set EJS as the view engine for rendering HTML pages
app.set("view engine", "ejs");

/* =========================
   Routes
   ========================= */

// Home route
// When user visits http://localhost:3000/
app.get("/", (req, res) => {
  // Render index.ejs file from views folder
  res.render("index");
});

// Form submission route
// Triggered when form submits data to /submit using GET method
app.get("/submit", async (req, res) => {

  // Extract name from query string (URL)
  // Example: /submit?name=Jaid
  let name = req.query.name;

  // Extract password from query string
  // Example: /submit?password=1234
  let password = req.query.password;

  // Create a new user document and save it in MongoDB
  // await waits until data is saved
  const newUser = await User.create({
    name: name,
    password: password,
  });

  // Print saved user data in terminal (for debugging)
  console.log(newUser);

  // Send response to browser
  res.send("User Created Successfully");
});

/* =========================
   Server Start
   ========================= */

// Start the server on port 3000
app.listen(3000, () => {
  // Confirmation message when server starts
  console.log("Server is running on http://localhost:3000");
});
