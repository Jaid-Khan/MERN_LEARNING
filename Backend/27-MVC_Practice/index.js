const app = require("./app");
const connectDB = require("./config/db")

// Database Connect 
connectDB()


app.listen(3000, ()=>{
    console.log("Server is unning on port 3000")
})