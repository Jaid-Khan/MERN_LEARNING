const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    password:String,
    token:String,
    profile:{
        type:String,
        default: "profile.jpg"
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female", "other"]
    },
},{
    timestamps:true,
})


const Users = mongoose.model("Users", userSchema)

module.exports = Users;