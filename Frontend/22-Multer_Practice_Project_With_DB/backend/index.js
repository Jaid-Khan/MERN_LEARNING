const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"))
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/multer")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Mongoose Schema & Model
const userSchema = new mongoose.Schema(
  {
    name: String,
    contact: String,
    email: String,
    profileName: {
        type:String,
    },
    profilePath: {
      type: String,
      default: "profile.jpeg",
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("Users", userSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const newFileName = Date.now() + "-" + file.originalname;
    cb(null, newFileName);
    // req.body.fileName = newFileName;
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello backend");
});

app.post("/signup", upload.single("profile"), async (req, res) => {
//   console.log(req.body)
//   console.log(req.file)

  const newUser = await Users.create({
    name: req.body.name,
    contact: req.body.contact,
    email: req.body.email,
    profileName: req.file.filename,
    profilePath: req.file ? req.file.path : "profile.jpeg",
  });
  console.log(newUser);
  res.send("Form Submitted Successfully")
});

app.get("/user-preview", async(req, res)=>{
  // console.log(req.query)
  let findUser = await Users.findOne({contact: req.query.contact})
  res.send(findUser)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
