// Import Express framework
const express = require("express");

// Create an Express application
const app = express();

// Import CORS middleware
const cors = require("cors");

// Enable CORS for all incoming requests
app.use(cors());

// ---------------- SAMPLE AUTH DATA ----------------

// Simulated user id (acts like authentication state)
let id = "123";

// ---------------- CUSTOM MIDDLEWARE ----------------

// Middleware function
function middleware(req, res, next) {

    // This runs before protected routes
    console.log("Middleware is running");

    // If id is empty → user is not authorized
    if (id == "") {
        // Send Unauthorized response
        res.status(401).send("Unauthorized");

    } else {
        // If authorized → move to next route handler
        next();
    }
}

// ---------------- PUBLIC ROUTES ----------------

// Home page (no middleware here)
app.get("/", (req, res) => {
    console.log("Home Page");
    res.send("This is Home Page");
});

// About page (public)
app.get("/about", (req, res) => {
    console.log("About Page");
    res.send("This is About Page");
});

// Contact page (public)
app.get("/contact", (req, res) => {
    console.log("Contact Page");
    res.send("This is Contact Page");
});

// ---------------- APPLY MIDDLEWARE ----------------

// This line is VERY IMPORTANT
// All routes written AFTER this line will go through middleware
app.use(middleware);

// ---------------- PROTECTED ROUTES ----------------

// Profile page (middleware will run first)
app.get("/profile", (req, res) => {
    console.log("Profile Page");
    res.send("This is Profile Page");
});

// Cart page (middleware will run first)
app.get("/cart", (req, res) => {
    console.log("Cart Page");
    res.send("This is Cart Page");
});

// ---------------- SERVER START ----------------

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
