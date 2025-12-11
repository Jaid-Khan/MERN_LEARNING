const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.get("/", (req, res)=>{
    res.send("This is Home")
})

app.post("/login", (req, res)=>{
    console.log(req.body)
    res.send("Data Found")
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})