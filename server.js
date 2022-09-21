const express = require("express");
const app = express();

var colors = require("colors");


// 🍀get, post, put, delete

// 🍀get
app.get("/", function (req, res) {
  //res.send('ig node server')
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/style.css");
});

app.get("/write", function (req, res) {
    //res.send('ig node server')
    res.sendFile(__dirname + "/write.html");
  });


// 🍀post
app.post('/add',function (req,res) {    
    res.send('/add, 전송완료')
})











// 🍀listen
app.listen(3000, function () {
  console.log("ig node server gogo".rainbow);
});
