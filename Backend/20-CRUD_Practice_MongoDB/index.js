const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/Engineering")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const userSchema = mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);

// Create User 
async function createUser(name, password) {
  const newUser = await User.create({
    name: name,
    password: password,
  });

  return newUser;
}

// Read User OR Find User 
async function findUserByName(name) {
  const user = await User.findOne({ name:name });
  return user;
}

// Update User 
async function updatePassword(name, password){
  let updateInfo = await User.findOneAndUpdate({
    name:name,
  },{
    password:password
  })
  return updateInfo;
}

// Delete User 
async function deleteUser(name){
  let deletedUser = await User.findOneAndDelete({
    name: name,
  });
  return deletedUser;
}

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/submit", async (req, res) => {
  let name = req.query.name;
  let password = req.query.password;

  await createUser(name, password);
  res.send("Form Submitted");
});

app.get("/find", async (req, res) => {
  let name = req.query.name;
  const user = await findUserByName(name);
  if (user){
    res.send(user);
  }else{
    res.send("User not found");
  }
});

app.get("/update", async (req, res)=>{
  let name = req.query.name
  let password = req.query.password

  const user = await updatePassword(name, password)
  if(user){
    res.send("Password Updated Succesfully")
  }else{
    res.send("User Not Found")
  }
})


app.get("/delete", async (req, res)=>{
  let name = req.query.name;
  let user = await deleteUser(name);
  if(user){
    res.send("User Has Been Deleted")
  }else{
    res.send("User Not Found")
  }
})


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
