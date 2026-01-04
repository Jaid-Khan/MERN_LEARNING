const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const cookie = require('cookie-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(session({
  secret: 'mernstack',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', (req, res) => {
  if(req.session.token === undefined){
    res.redirect("/login");
  }else{
    res.render("index")
  }  
});

app.get('/login', (req, res) => {
  res.render("login")
})

app.post('/login', (req, res) => {
  req.session.token = "authenticated"
  res.cookie("Username", "Tony Stark");
  console.log(req.session);
  console.log(req.body);
  console.log(req.session.id);
  res.redirect('/');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});