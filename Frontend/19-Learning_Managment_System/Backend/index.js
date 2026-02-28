const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connection");
const students = require("./database/students");
const student = require("./students/main");
const admin = require("./admin/main");
const teacher = require("./teachers/main");
const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log("Server is running on port 5000");
    connectDB();
});

app.get("/", (req, res) => {
    res.send("This is Home Route");
});

app.use("/student", student);
app.use("/admin", admin);
app.use("/teacher", teacher);
















