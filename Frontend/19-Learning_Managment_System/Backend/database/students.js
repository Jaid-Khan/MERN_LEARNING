const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"xyz"
    },
    age:{
        type:Number,
        required:true
    },
    class_:{
        type:Number,
        required:true
    }
})

const students = new mongoose.model("students", studentSchema);

module.exports = students;