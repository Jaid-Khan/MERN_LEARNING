const express = require("express");
const app = express();
require("dotenv").config();
const admin = require("./routes/admin/admin");
const user = require("./routes/user/user");
const vendor = require("./routes/vendor/vendor");
const cors = require("cors");
const cookie = require("cookie-parser");


app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
  }),
);
app.use(cookie())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("upload"));

app.use("/admin", admin);
app.use("/vendor", vendor);
app.use("/", user);

app.get("/", (req, res) => {
  res.send("Home");
});

module.exports = app;
