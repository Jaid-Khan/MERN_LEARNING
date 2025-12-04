const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;

app.use(cors());

let users = [];
let liked_movies = {};
let movies = [
    // Sci-Fi
    "Interstellar",
    "Inception",
    "The Matrix",
    "Blade Runner 2049",
    "The Martian",
    "Dune",
    "Arrival",
    "Avatar",
    "Edge of Tomorrow",
    "District 9",

    // Marvel
    "Iron Man",
    "The Incredible Hulk",
    "Iron Man 2",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "Guardians of the Galaxy",
    "Doctor Strange",
    "Black Panther",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Spider-Man: No Way Home",

    // DC
    "Man of Steel",
    "Batman v Superman: Dawn of Justice",
    "Wonder Woman",
    "Aquaman",
    "Shazam!",
    "Justice League",
    "The Dark Knight",
    "The Dark Knight Rises",
    "Joker",
    "The Batman"
];


app.get("/signup", (req, res) => {
    console.log(req.query);
    users.push(req.query);
    res.send(req.query.number);
});

app.get("/login", (req, res) => {
    let found_user = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.query.email) {
            found_user = true;
            if (users[i].password == req.query.password) {
                res.send({ login: true, id: users[i].contact });
            }
            else {
                res.send({ login: false, alert: "Password Does Not Match" })
            }
        }
    }

    if (found_user == false) {
        res.send({ login: false, alert: "User Not Found" });
    }
})

app.get("/movies", (req, res) => {
    res.send(movies);
})

app.get("/liked", (req, res)=>{
    res.send(liked_movies[req.query.id]);
})

app.get("/liked_movies", (req, res) => {
    if (liked_movies[req.query.id] != undefined) {
        liked_movies[req.query.id].push(req.query.movie);
    }
    else {
        liked_movies[req.query.id] = [];
        liked_movies[req.query.id].push(req.query.movie);
    }
    console.log(liked_movies);
    res.send(true);
})



app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});