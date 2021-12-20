var express = require("express");
const req = require("express/lib/request");
var app = express();
var env = require("dotenv").config();

var string = req.method + " " + req.path + " - " + req.ip;

app.use(function (req, res, next) {
  console.log(string);
  next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  }
  res.json({ message: "Hello json" });
});

module.exports = app;
