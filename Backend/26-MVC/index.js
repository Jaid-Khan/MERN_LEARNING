const express = require("express");
const app = express();
const user = require("./routes/user")

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.send("This is Home Page")
})

app.use("/user", user)


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})