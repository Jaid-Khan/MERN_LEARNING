const express = require("express");
const app = express();

// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");


// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Engineering")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  //Creating Schema
  const CSE_Schema = new mongoose.Schema({
    name:String,
    age:Number,
    college:String
  })

//Creating Model
const CSE_Model = mongoose.model("CSE", CSE_Schema);

//Insert Data
async function insertData(){
    const new_Student = await CSE_Model.create({
        name:"Captain America",
        age:48,
        college:"MIT"
    })

    console.log(new_Student)
}

insertData();

app.get("/", (req, res) => {
  res.send("Hello, MongoDB!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
