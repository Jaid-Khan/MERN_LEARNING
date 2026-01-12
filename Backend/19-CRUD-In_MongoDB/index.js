// Import Express framework
const express = require("express");

// Import Mongoose for MongoDB interaction
const mongoose = require("mongoose");

// Create Express application
const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/Engineering")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Define schema (structure of document)
const studentSchema = mongoose.Schema({
  name: String,
  password: String,
});

// Create model to interact with students collection
const student = new mongoose.model("students", studentSchema);

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// Submit route to create student
app.get("/submit", async (req, res) => {
  // Get data from query string
  let name = req.query.name;
  let password = req.query.password;

  // Call create function
  const newStudent = await createStudent(name, password);

  console.log(newStudent);
  res.send("Data Submitted Successfully");
});

// CREATE: Add student to database
async function createStudent(name, password) {
  const newStudent = await student.create({
    name: name,
    password: password,
  });
  return newStudent;
}

// READ: Fetch students from database
async function getAllStudents() {
  // Find all students
  const getStudent = await student.find({});
  console.log(getStudent);

  // Find one student
  // await student.findOne({ name: "John Doe" });

  // Find student by ID
  // await student.findById("6964ae64912aed60082c2661");
}
// getAllStudents();

// UPDATE: Modify student data
async function updateStudent() {
  // Update first matched document
  // await student.findOneAndUpdate({ name: "John Doe" }, { name: "Tony Stark" });

  // Update using ID
  // await student.findByIdAndUpdate("6964ae64912aed60082c2661", { name: "Hulk" });

  // Update multiple documents
  await student.updateMany(
    { name: "Rohan" },
    { name: "Rohan Sharma" }
  );
}
// updateStudent();

// DELETE: Remove student from database
async function deleteStudent() {
  // Delete one document by condition
  // await student.findOneAndDelete({ name: "Rohan Sharma" });

  // Delete using ID (best practice)
  await student.findByIdAndDelete("6965423f1d28ca144dfc2078");
}

// Call delete function
deleteStudent();

// Start Express server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
