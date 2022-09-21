const express = require("express");
const app = express();

let colors = require("colors");

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

let MongoClient = require('mongodb').MongoClient;

require('dotenv').config()


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


// 🦄🦄c28 

let url = process.env.mongoDB_url;

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("ig-Database created!");

  
// 🍀listen
app.listen(process.env.PORT, function () {
    console.log("ig node server gogo".rainbow);
  });
  


  client.close();
});





