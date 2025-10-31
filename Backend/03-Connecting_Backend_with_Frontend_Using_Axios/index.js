// Importing the Express module to create a web server
const express = require("express");

// Initializing an Express application and storing it in 'server'
const server = express();

// Importing the CORS module to allow frontend (React) to access this backend
const cors = require("cors");

// Using CORS middleware — this enables Cross-Origin Resource Sharing
// It allows requests from different domains or ports (e.g., frontend: 5173 → backend: 3000)
server.use(cors());


// ------------------------- ROUTE 1 -------------------------
// Defining a simple GET route for the root URL "/"
// When a GET request is made to "/", this callback function runs
server.get("/", (req, res) => {
    // Sending a text response back to the client
    res.send("This is Home");
});


// ------------------------- ROUTE 2 -------------------------
// Creating another GET route "/students" to send student data based on query
server.get("/students", (req, res) => {

    // Defining a 'students' object containing details of two students
    let students = {
        ankit: {
            age: 20,
            course: "Btech"
        },
        mohit: {
            age: 26,
            course: "Mtech"
        }
    }

    // Accessing the query parameter 's' from the URL
    // Example: http://localhost:3000/students?s=ankit
    let s = req.query.s;

    // Checking if the query parameter 's' equals "ankit"
    if (s == "ankit") {
        // If yes, send 'ankit' object data as a response
        res.send(students.ankit);
    } else {
        // Otherwise, send 'mohit' object data as a response
        res.send(students.mohit);
    }
});


// ------------------------- SERVER START -------------------------
// Starting the server on port 3000
// This callback runs once the server starts successfully
server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
