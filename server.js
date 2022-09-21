const express = require("express");
const app = express();

var colors = require("colors");

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


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


// 🍀post, bodyParser
app.post('/add',function (req,res) {    
    res.send('/add, 전송완료')

    console.log(req.body)
    console.log(req.body.ig_title)
})











// 🍀listen
app.listen(3000, function () {
  console.log("ig node server gogo".rainbow);
});
