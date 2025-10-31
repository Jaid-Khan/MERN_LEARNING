// Creating simple server using http
// const http = require("http");
// const port = 3000;
// const server = http.createServer((req, res) =>{
//     if(req.url ==="/"){
//         res.end("Home");
//     } else if(req.url ==="/contact"){
//         res.end("Contact");
//     }else if(req.url ==="/about"){
//         res.end("About");
//     }
//     else{
//         res.end("404");
//     }
// })

// server.listen(port, ()=>{
//     console.log(`Server listening on port ${port}`);
// })

// ___________________________________________________________________________________________

// Creating Server Using express
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Home");
// });
// app.get("/contact", (req, res) => {
//     res.send("Contact");
// });
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// ___________________________________________________________________________________________

// Again Creating a Server 
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Home");             //Inside the res.send we can also Put html like:  res.send("<h1>Home</h1>");
})
app.get("/contact", (req, res)=>{
    res.send("Contact");         
})
app.get("/about", (req, res)=>{
    res.send("About");
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});















