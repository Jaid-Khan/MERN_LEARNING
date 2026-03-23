const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
// Set EJS as the view engine
app.set('view engine', 'ejs');
// Serve static files from the 'public' directory
app.use(express.static('public')); 

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'profile-uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, randomString() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

function randomString() {
    let str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let randomStr = "";
    for(let i = 0; i <= str.length; i++){
        randomStr += str[Math.floor(Math.random() * str.length)];
    }
    return randomStr;
}


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", upload.single("profileImage"), (req, res) => {
    res.send("Signup successful!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});