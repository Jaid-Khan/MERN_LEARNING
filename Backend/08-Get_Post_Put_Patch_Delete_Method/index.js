const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// -------------------------------------------------------------
// GET METHOD (Read Data)
// -------------------------------------------------------------
app.get("/login", (req, res) => {
    res.send(`<form action="/signup" method="post">
                <input type="text" required name="nam" id=""><br>
                <input type="submit" value="Submit">
             </form>`);
});

// -------------------------------------------------------------
// POST METHOD (Create Data)
// -------------------------------------------------------------
app.post("/signup", (req, res) => {
    console.log("POST Body:", req.body);
    res.send("Signup Successfull");
});

// Dummy database (in-memory)
let users = [
    { id: 1, name: "Ayaan" },
    { id: 2, name: "Zara" },
    { id: 3, name: "Khan" }
];

// -------------------------------------------------------------
// GET METHOD (Read all users)
// -------------------------------------------------------------
app.get("/users", (req, res) => {
    res.json(users);
});
// -------------------------------------------------------------
// POST METHOD (Add new user)
// -------------------------------------------------------------
app.post("/users", (req, res) => {
    const { name } = req.body;

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);
    res.status(201).json({
        message: "User Created Successfully",
        data: newUser
    });
});

// -------------------------------------------------------------
// PUT METHOD (Update full user object)
// -------------------------------------------------------------
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    let user = users.find(u => u.id === id);
    if (!user) return res.status(404).send("User Not Found");

    // FULL update
    user.name = name;

    res.json({
        message: "User Updated Successfully (PUT)",
        data: user
    });
});

// -------------------------------------------------------------
// PATCH METHOD (Update part of a user object)
// -------------------------------------------------------------
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    let user = users.find(u => u.id === id);
    if (!user) return res.status(404).send("User Not Found");

    // PARTIAL update
    if (name) user.name = name;

    res.json({
        message: "User Updated Successfully (PATCH)",
        data: user
    });
});

// -------------------------------------------------------------
// DELETE METHOD (Delete user by ID)
// -------------------------------------------------------------
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let user = users.find(u => u.id === id);
    if (!user) return res.status(404).send("User Not Found");

    users = users.filter(u => u.id !== id);

    res.json({
        message: "User Deleted Successfully",
        deletedId: id
    });
});

// -------------------------------------------------------------
// Server Listener
// -------------------------------------------------------------
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
