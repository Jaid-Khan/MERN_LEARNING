// Import Express framework
const express = require('express');

// Create Express application instance
const app = express();

// Import CORS middleware (for cross-origin requests)
const cors = require('cors');

// Import cookie-parser middleware (to read cookies from browser)
const cookie = require('cookie-parser');

// Import express-session (for session management)
const session = require('express-session');


// Enable CORS for all incoming requests
app.use(cors());

// Middleware to parse incoming JSON data (API requests)
app.use(express.json());

// Middleware to parse URL-encoded form data (HTML forms)
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template/view engine
app.set('view engine', 'ejs');

// Make "public" folder accessible for static files (CSS, JS, images)
app.use(express.static('public'));

// Configure and enable session middleware
app.use(session({
  secret: 'mernstack',       // Used to sign and secure session ID cookie
  resave: false,             // Do not save session if nothing changed
  saveUninitialized: false,  // Do not create empty sessions
}));

// Enable cookie parsing so req.cookies is available
app.use(cookie());


// Home route (Protected Route)
app.get('/', (req, res) => {

  // Check if session token does NOT exist
  if(req.session.token == undefined){

    // If user is not logged in, redirect to login page
    res.redirect('/login');

  } else {

    // If user is logged in, log session data
    console.log(req.session);

    // Render index.ejs page
    res.render('index');
  }
});


// GET login route (shows login page)
app.get("/login", (req, res) => {

  // Render login.ejs page
  res.render("login");
});


// POST login route (handles login form submission)
app.post("/login", (req, res) => {

  // Log submitted form data (username & password)
  console.log(req.body);

  // Set session token to mark user as authenticated
  req.session.token = "authenticated";

  // Create a cookie with username as key and password as value
  // maxAge defines how long the cookie lives in browser
  res.cookie(req.body.username, req.body.password, { maxAge: 90000000 });

  // Redirect user to home page after login
  res.redirect("/");
});


// Start server on port 3000
app.listen(3000, () => {

  // Confirm server is running
  console.log('Server is running on port 3000');
});
