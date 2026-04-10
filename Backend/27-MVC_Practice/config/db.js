const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/mvc-project");
        console.log("Databse Connected");
        
    } catch (error) {
        console.log("err", error)
    }
}

module.exports = connectDB;