const express = require("express");
const app = express();

var colors = require("colors");

app.get("/", function (req, res) {
  //res.send('ig node server')
  res.sendFile(__dirname + "/index.html");
});
app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/style.css");
});

app.get("/pet", function (req, res) {
  res.send("hi pet");
});

app.listen(8080, function () {
  console.log("ig node server gogo".rainbow);
});
