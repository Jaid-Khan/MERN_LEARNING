const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./database/connection"); //Database Connection
const students = require("./database/students"); //Students Schema
const student = require("./students/main");
const admin = require("./admin/main");
const teacher = require("./teachers/main");
const admins = require("./database/admin"); //Admin Schema
const {encryptPassword} = require("./cryptr");


app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.use("/student", student);
app.use("/admin", admin);
app.use("/teacher", teacher);

async function createAdmin() {
  let findAdmin = await admins.find();
  if (findAdmin.length === 0) {
    let defaulAdmin = admins.create({
      name: "Admin",
      contact: "0123456789",
      email: "admin@gmail.com",
      password: encryptPassword("admin"),
    });
  }
}

createAdmin();
