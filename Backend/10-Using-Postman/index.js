const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res)=>{
    res.send("This is Home")
})

app.get("/login", (req, res)=>{
    console.log(req.query)
    res.send(true)
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})