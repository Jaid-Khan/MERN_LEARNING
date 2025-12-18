// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Import CORS middleware
const cors = require("cors");

// Enable CORS (allows requests from other origins like frontend apps)
app.use(cors());

// Middleware to parse incoming JSON data (application/json)
app.use(express.json());

// Middleware to parse URL-encoded data (form submissions)
// extended: true allows nested objects
app.use(express.urlencoded({ extended: true }));

// ---------------- HOME ROUTE ----------------

// Handle GET request on root URL "/"
app.get("/", (req, res) => {
    // Send a simple response to the client
    res.send("This is Home");
});

// ---------------- USER DATA ----------------

// Sample user object for user with ID 123
const user_123 = {
    name: "Ankit",
    age: "20",
    gender: "Male",
    password: "12345"
};

// Sample user object for user with ID 124
const user_124 = {
    name: "Rohit",
    age: "22",
    gender: "Male",
    password: "1234"
};

// Sample user object for user with ID 125
const user_125 = {
    name: "Amit",
    age: "24",
    gender: "Male",
    password: "345"
};

// ---------------- DYNAMIC ROUTE ----------------

// Handle GET request with dynamic parameter :id
app.get("/user/:id", (req, res) => {

    // Print the id received from URL to console
    // Example: /user/123 → req.params.id = "123"
    console.log(req.params.id);

    // Check which user ID is requested
    if (req.params.id === "123") {
        // Send user_123 data if ID is 123
        res.send(user_123);

    } else if (req.params.id === "124") {
        // Send user_124 data if ID is 124
        res.send(user_124);

    } else if (req.params.id === "125") {
        // Send user_125 data if ID is 125
        res.send(user_125);

    } else {
        // If ID does not match any user
        res.send("User Not Found");
    }
});

// ---------------- CRUD ROUTES (COMMENTED) ----------------

// POST request → create/update user data
// app.post("/user", (req, res) => {
//     user.name = req.body.name;
//     user.age = req.body.age;
//     user.gender = req.body.gender;
//     user.password = req.body.password;
//     res.send(user);
// });

// PUT request → update a specific key of user object
// app.put("/user", (req, res) => {
//     user[req.body.key] = req.body.value;
//     res.send(user);
// });

// DELETE request → delete a specific key from user object
// app.delete("/user", (req, res) => {
//     delete user[req.body.key];
//     res.send(user);
// });

// ---------------- SERVER START ----------------

// Start the server on port 3000
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
