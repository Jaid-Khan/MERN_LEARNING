const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Home");
})

app.get("/images", (req, res) => {
    let images = [
        {
            img: "https://images.unsplash.com/photo-1763162944506-ee1fbaf5a733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        },
        {
            img: "https://images.unsplash.com/photo-1763142214145-719994a5df19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",

        },
        {
            img: "https://plus.unsplash.com/premium_photo-1762548729534-ecd689a77503?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            img: "https://images.unsplash.com/photo-1763116147445-2744ef5e5567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            img: "https://images.unsplash.com/photo-1763321402439-41eb2a0c7e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",

        }
    ]

    res.send(images);
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})