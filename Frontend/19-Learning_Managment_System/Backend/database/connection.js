const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/learning_management_system")
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;