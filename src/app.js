const cookieParser = require("cookie-parser");
const express = require("express");

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
