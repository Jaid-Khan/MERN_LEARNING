const app = require("./app")
const connectDB = require("./config/db")
const createAdmin = require("./model/admin/init")

createAdmin()
connectDB()


app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing on port ${process.env.PORT}`)
})