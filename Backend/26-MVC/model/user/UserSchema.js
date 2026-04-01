const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    contact:String,
    email:String,
    password:String,
})

const Users = new mongoose.model("Users", userSchema);

module.exports = Users;
