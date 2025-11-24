const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    res.send("This is Home Page");
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})