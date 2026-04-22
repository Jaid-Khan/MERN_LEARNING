const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
     name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender:{
        type:String,
        require:true,
        enum:["male", "female", "others"]
    },
    address:{
        localAddress:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        pincode:{
            type:String,
            required:true,
        }
    },
    dob:{
        type:Date,
        required:true,
    },
    wishlist:[],
    cart:[],
    booking:[],
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model("users", userSchema);
module.exports = user;



