const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting database 
mongoose.connect('mongodb://localhost:27017/cookies_sessions_jwt').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Setting up Session 
app.use(session({
    secret:"zeroid@12321",
    saveUninitialized:false,
    resave:false,
    cookie:{
        httpOnly:true,
        maxAge:1000*60*60*24 // 1 day
    },
}))


// Handling Routes 
app.get('/', (req, res) => {
    res.render('index');
});


// Listening Server 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});