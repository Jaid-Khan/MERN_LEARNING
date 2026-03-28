const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
    destination: (req, file , cb)=>{
        cb(null, "upload/");
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "-" +file.originalname);
    }
})

const upload = multer({storage: storage});

app.get("/", (req,res)=>{
    res.send("Hello World")
});

app.get("/signup", (req,res)=>{
    res.send("Signup Page");
});

app.post("/signup", upload.single("profile"), (req,res)=>{
    res.send("Form Submitted");
    console.log(req.file);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});