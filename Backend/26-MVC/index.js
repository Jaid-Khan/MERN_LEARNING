const express = require("express");
const app = express();
const user = require("./routes/user") //User Route Imported
const connection = require("./model/connection"); //Imported Database Connection


app.set("view engine", "ejs"); //View Engine
connection(); //Database Connection
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("This is Home Page")
})

app.use("/user", user) // User Route


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})