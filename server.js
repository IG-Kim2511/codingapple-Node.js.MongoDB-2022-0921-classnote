const express = require("express");
const app = express();

// colors
let colors = require("colors");

//bodyParser 
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// dotenv
require('dotenv').config()

// mogoClient
let MongoClient = require('mongodb').MongoClient;

// ejs
app.set('view engine','ejs')


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


  // 🦄🦄c28 

let url = process.env.mongoDB_url;

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("ig-Database created!");


  let db = client.db('db0921')

  // 🍀post, bodyParser
  app.post('/add',function (req,res) {    
    res.send('/add, 전송완료')

    console.log(req.body)
    console.log(req.body.ig_title)

    // 🍀insertOne
    db.collection('co0921').insertOne({title: req.body.ig_title, date:req.body.ig_data },function (){
      console.log('insertone success'.blue)      
    })
  })
  
  app.get("/list", function (req, res) {

    // find().toArray()
    db.collection('co0921').find().toArray(function (err,pp_res) {
      console.log(pp_res)
      
      // ejs
      //res.render
      res.render('list.ejs',{ig_posts:pp_res});
    })

  });


  // 🍀listen
  app.listen(process.env.PORT, function () {
      console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);
  });


  // cliend.close()있으면 post가 안됨..왜인지는 모름
  // client.close();
});





