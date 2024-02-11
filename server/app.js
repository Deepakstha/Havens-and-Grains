const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
const session = require("express-session");
require("./config/dbConfig");

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//expression session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/uploads", express.static("uploads"));

//Routes

app.get("/", (req, res) => {
  res.send("Welcome to Havens and grains");
});

app.use(errorHandler);

app.use("*", (req, res) => {
  return res.status(404).json({ message: "Route Not Found", status: 404 });
});

module.exports = app;
