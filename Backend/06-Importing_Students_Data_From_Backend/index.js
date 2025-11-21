const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is Home Page");
});

app.get("/students", (req, res) => {
    let students = [
        {
            name: "Ankit",
            age: 20,
            gender: "male",
            course: "Btech",
        },
        {
            name: "Manish",
            age: 21,
            gender: "male",
            course: "Btech",
        },
        {
            name: "Saurabh",
            age: 24,
            gender: "male",
            course: "Mtech",
        },
        {
            name: "Anushka",
            age: 21,
            gender: "Female",
            course: "Btech",
        },
        {
            name: "Neha",
            age: 22,
            gender: "Female",
            course: "Mtech",
        },
    ];
    res.send(students);
});

app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
});