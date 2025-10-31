
// Import express framework
const express = require("express");

// Create an express app instance
const app = express();

// Import cors for cross-origin requests
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// ---------------------- ROUTES ----------------------

// Default route for home page
app.get("/", (req, res) => {
    res.send("This is Home Page"); // Sends a simple message response
});

// Route to handle '/students' requests
app.get("/students", (req, res) => {

    // Object storing students data
    let students = {
        ankit: {
            name: "Ankit",
            age: 20,
            gender: "male",
            course: "Btech"
        },
        mohit: {
            name: "Mohit",
            age: 23,
            gender: "male",
            course: "Mtech"
        }
    };

    // Get query parameter value (e.g., /students?s=ankit)
    let s = req.query.s;

    // Send data based on query value
    if (s == "ankit") {
        res.send(students.ankit);
    } else {
        res.send(students.mohit);
    }
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
});
