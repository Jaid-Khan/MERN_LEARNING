// Importing the Express framework
// Express helps us create a backend server easily
const express = require("express");

// Creating an Express application instance
const app = express();


// Setting EJS as the template (view) engine
// This tells Express that we will use .ejs files for rendering views
app.set("view engine", "ejs");


// Making the 'public' folder static
// Any file inside 'public' (CSS, JS, images) can be accessed directly by the browser
// Example: public/style.css → http://localhost:3000/style.css
app.use(express.static("public"));


// Creating a user object
// This data will be sent from backend to EJS (frontend)
let user = {
    name: "Iron Man",
    age: 23,
    gender: "Male",
};


// Home route
// When user visits http://localhost:3000/
app.get("/", (req, res) => {

    // Rendering index.ejs file
    // Passing 'user' object data to EJS
    // Now index.ejs can access: name, age, gender
    res.render("index", user);
});


// Contact route
// When user visits http://localhost:3000/contact
app.get("/contact", (req, res) => {

    // Rendering contact.ejs file
    res.render("contact");
});


// About route
// When user visits http://localhost:3000/about
app.get("/about", (req, res) => {

    // Sending plain text response (no EJS here)
    res.send("About");
});


// Starting the server on port 3000
app.listen(3000, () => {

    // Confirmation message in terminal
    console.log("server is running on port 3000");
});
