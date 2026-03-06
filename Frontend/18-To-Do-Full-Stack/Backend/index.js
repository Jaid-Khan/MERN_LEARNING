// Import Express framework to create server and APIs
const express = require("express");

// Import CORS to allow frontend (React) to access backend
const cors = require("cors");

// Import Mongoose to connect and work with MongoDB
const mongoose = require("mongoose");

// Create an Express application instance
const app = express();

// Enable CORS for all incoming requests
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB database named "todo_app"
mongoose.connect("mongodb://localhost:27017/todo_app")

// If connection is successful
.then(()=>{
  console.log("Connected to MongoDB");
})

// If connection fails
.catch((err)=>{
  console.error("Error connecting to MongoDB", err);
});


// Define schema structure for Todo documents
const Todo_Schema = new mongoose.Schema({

  // Field to store note title
  job : String,

  // Field to store note description
  desc : String,
})


// Create a Mongoose model named "Jobs" using the schema
// This represents the "jobs" collection in MongoDB
const Todo = mongoose.model("Jobs", Todo_Schema);


// Default route to test backend server
app.get("/", (req, res) => {

  // Send simple response to browser
  res.send("Hello from the backend!");
});


// GET API to fetch all notes from database
app.get("/jobs", async (req, res) => {

  // Fetch all documents from MongoDB collection
  let all_jobs = await Todo.find()

  // Log fetched notes in server console
  console.log(all_jobs);

  // Send notes back to frontend
  res.send(all_jobs);  
});


// POST API to create a new note
app.post("/jobs", async (req, res)=>{

  // Log incoming request body
  console.log(req.body)

  // Create a new document in MongoDB
  await Todo.create({

    // Save title sent from frontend
    job : req.body.job,

    // Save description sent from frontend
    desc : req.body.desc
  })

  // Send success response
  res.send(true)
})


// PUT API to update an existing note
app.put("/jobs", async (req, res)=>{

  // Log request body containing updated data
  console.log(req.body);

  // Find document by ID and update its fields
  await Todo.findByIdAndUpdate(req.body.id,{

    // ID of the document to update
    id: req.body.id,

    // Updated title
    job: req.body.job,

    // Updated description
    desc : req.body.desc,
  })

  // Send success response
  res.send(true);
})


// DELETE API to remove a note
app.delete("/jobs", async (req, res)=>{

  // Log request body containing id
  console.log(req.body);

  // Delete document using MongoDB _id
  await Todo.findByIdAndDelete(req.body.id);

  // Send success response
  res.send(true);
})


// Start server on port 3000
app.listen(3000, () => {

  // Log confirmation message
  console.log("Server is running on port 3000");
});
