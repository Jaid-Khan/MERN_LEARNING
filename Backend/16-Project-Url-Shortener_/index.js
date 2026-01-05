// Import Express framework
const express = require("express");

// Create Express application
const app = express();

// Set EJS as template/view engine
app.set("view engine", "ejs");

// Serve static files from "public" folder
app.use(express.static("public"));

// Object to store shortId → original URL
let url = {};

// Function to generate random short ID
function randomString() {
  let id = "id_";                 // Prefix for short URL
  let num = Math.floor(Math.random() * 1000); // Random number
  let rs = id + num;              // Combine prefix + number
  return rs;                      // Return short ID
}

// Route for home page
app.get("/", (req, res) => {
  res.render("index");            // Render index.ejs
});

// Route to create shortened URL
app.get("/shortener", (req, res) => {
  let rs = randomString();        // Generate short ID
  url[rs] = req.query.url;        // Store original URL
  res.render("shortener", {       // Render result page
    shortUrl: `http://localhost:3000/${rs}`
  });
});

// Middleware to handle short URL redirect
function middleware(req, res, next) {
  let newUrl = req.originalUrl;   // Get URL path
  newUrl = newUrl.slice(1);       // Remove "/" from path
  res.redirect(url[newUrl]);      // Redirect to original URL
}

// Use middleware for all unmatched routes
app.use(middleware);

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
