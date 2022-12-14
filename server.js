

/* ๐ฆ๐ฆ๐ฆnpm , terminal  ๋ช๋ น์ด
   
  ๐npm
  npm install -g nodemon  
  npm install mongodb  

  ๐terminal  ๋ช๋ น์ด
  ์๋ฒ ๋๊ธฐ : terminal์์ ctrl + c

  node server.js
  nodemon server.js 

  ๐Google cloud ๋ช๋ น์ด
    gcloud init
    gcloud app deploy
*/
/* 
  ๐ฆ๐ฆ๐ฆ์์ฃผ์ฐ๋ node.js, mongoDB ๋ฌธ๋ฒ,

  ๐
  app.listen(3000, function(){ } )
  

  
  app.get("/", function (req์์ฒญ, res์๋ต) {
    res์๋ต.render('index.ejs')
    res.sendFile(__dirname + "/style.css");
  })

  app.post('/add',function (req,res) {   })

  app.delete('/delete',function (req,res) {   })

  app.put('/update',function (req,res) {   })

  ๐
    res.redirect('/list');

  ๐
    req.body.~

  ๐
  .insertOne({},function (err,res) {})
  .updateOne({},function (err,res) {})
  .deleteOne({},function (err,res) {})

  ๐
  .findOne({},function (err,res) {})
  .find({title:req.query.value}).toArray((err,db๊ฒฐ๊ณผ)=>{ })



*/




/* ๐ Server.js ์๋จ ์ฝ๋ */

// c18 express
// require(~) : ~ํ์ผ, ~๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๊ฐ์ ธ์์(import) ์ฐ๊ฒ ๋ค๋ ๋ป
const express = require("express");
const app = express();

// colors
let colors = require("colors");

// c24-5) bodyParser
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// dotenv
require('dotenv').config()

// c30) mogoClient
let MongoClient = require('mongodb').MongoClient;

 // c32) ejs
// let ejs = require('ejs'); ๐documnet์ ์๋ ์ฌ์ฉ๋ฒ์ธ๋ฐ ์์ง ์ดํด๋ชปํ์
app.set('view engine','ejs')

// c50) static ํ์ผ ๋ณด๊ด์ํด publicํด๋ ์. html์์ ๊ฒฝ๋ก์ค์ ํ  ๋ rootํด๋์ ๋ณด๊ด๋ ๊ฒ์ฒ๋ผ ๊ฒฝ๋ก ์ค์ ํจ
app.use(express.static('public'))

// c52)  method-override
let methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* 
  ๐me - next ์์์ ๋์ฌ ์๋จ ์ฝ๋ ์ ๋ฆฌ

  // c30)
  const MongoClient = require('mongodb').MongoClient;

  // c32) 
  app.set('view engine', 'ejs');

  // c50)  static ํ์ผ ๋ณด๊ด์ํด publicํด๋ ์ธ๊ฑฐ๋ผ๋ ๋ป
  app.use('/public_c50', express.static('public_c50'));

  // c52)  method-override
  var methodOverride = require('method-override');
  const passport = require('passport');
  app.use(methodOverride('_method'))

  // ๐c58-10)
  // const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const session = require('express-session');

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(session({ secret: 'ingyum123', resave: true, saveUninitialized: false }));


  // c64) .env ํ์ผ, environment variable, 
  // root folder์ .envํ์ผ ๋ง๋ค๋ : require('dotenv').config()
  // ๋ค๋ฅธ folder(env_c64)์ .envํ์ผ ๋ง๋ค๋ : require('dotenv').config({path: "./env_c64/.env"})
  require('dotenv').config({path: "./env_c64/.env"})
*/


// ๐ฆ๐ฆme- terminal ๋ช๋ น์ด, ํ์ผ์์น ์ ๋ฆฌ (๐codingapple-Node.js.MongoDB-2022-0629-classnoteํด๋...server.js)
/* 
  ๐ฆ๐ฆc12 express ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
        $npm init
        $npm install express

  ๐ฆ๐ฆc14 ๋ฏธ๋ฆฌ๋ณด๊ธฐ
  node server.js

  ์๋ฒ ๋๊ธฐ : ctrl +c

  ๐ฆ๐ฆc18 nodemon ์๋ ๋ฏธ๋ฆฌ๋ณด๊ธฐ
  $npm install -g nodemon (yarn add global nodemon)

  $nodemon server.js 

  ๐ฆ๐ฆc24 body-parser ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
  $npm install body-parser ํน์ yarn add body-parser


  ๐ฆ๐ฆc28 mongodb ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น        
  npm install mongodb

  ๐ฆ๐ฆc32 EJS 
  ๐./views/~~.ejs
  npm install ejs

  ๐ฆ๐ฆc52 method-override
  npm install method-override

  ๐ฆ๐ฆc58 passport, passport-local, express-session,
  npm install passport, passport-local, express-session

  ๐ฆ๐ฆc64 dot env
  ๐./env_c64/.env
  npm install dotenv

  ๐ฆ๐ฆc74 router๊ด๋ฆฌ, router.get(์ฃผ์, ๋ฏธ๋ค์จ์ด, ํจ์), router.use(๋ฏธ๋ค์จ์ด)
  ๐ ./routes/shop_c74.js
  ๐ ./routes/zoo_c74.js


  ๐ฆ๐ฆc76
  ๐app.yaml
  ๐gcloud init
  ๐gcloud app deploy


  ๐ฆ๐ฆc78
  ๐./public/image
   npm install multer
        
*/

/* ๐ฆ๐ฆ ์ฐธ๊ณ   
  w3school - node.js
    
  https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/

  npmjs.com    
*/



/* ๐ฆ๐ฆme- ์๋ฌํด๊ฒฐ 
  10) ์ ์์ด ์๋จ... :   ๋น๋ฐ๋ฒํธ ๋๋ค์์ฑํ์๋ ์ ์์ฑ๊ณตํจ

  20) ์ฝ๋๋ ๋ค ๋ง๊ณ , console.log์๋ ๋ฐ์ดํฐ ์ ๋๋ก ๋ค ์ ์ฉ์ด ๋ฌ๋๋ฐ, mongodb์ฌ์ดํธ์๋ ์๋ณด์ : ๊ทธ๋ฅ mongodb์ฌ์ดํธ ์ฌ๋ก๊ทธ์ธํด์ ํด๊ฒฐ
*/


// ๐ฆ๐ฆc16 npm์๋ฌํด๊ฒฐ, package.json, npm init, npm install express(Node.js, Express๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น)
console.log('๐ฆ๐ฆ๐ฆ๐ฆc5')

/* 
  2)
  npm
  package.json

  4) ํฐ๋ฏธ๋ ๋ช๋ น์ด
  $npm init
  $npm install express
*/

// ๐ฆ๐ฆc18 express๋ก ์๋ฒ์คํ๊ณต์, node server.js, listen, get(์ฃผ์, (req,res)={} ), send('๊ธ์')
// ๐ server.js ์๋จ -  (express) ์๋ฒ์คํ ๊ธฐ๋ณธ๊ณต์  
// ๐ํ๋จ ์ฝ๋ - listen(~)

/*

  2) ๐ server.js ์๋จ์ ์ฝ๋ ์ถ๊ฐ, express ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฒจ๋ถ์ ์ฌ์ฉ 

  4) app.listen()์ ์ํ๋ ํฌํธ์ ์๋ฒ๋ฅผ ์คํํ๋ ๋ฌธ๋ฒ์ด๋ผ๊ณ  ๋ณด์๋ฉด ๋ฉ๋๋ค. 
  listen() ํจ์ ์์ ๋๊ฐ์ ํ๋ผ๋ฏธํฐ๊ฐ ํ์ํฉ๋๋ค. 
  listen(์๋ฒ๋ฅผ ์คํํ  ํฌํธ๋ฒํธ, function(){์๋ฒ ์คํ์ ์คํํ  ์ฝ๋})

  5) 8080ํฌํธ ์ฐ๋ฉด ํธํจ - ๊ตฌ๊ธ ํด๋ผ์ฐ๋์๋น์ค ๋ํดํธ๊ฐ ๐ c76

  6) node server.js / localhost:3000

  ํฐ๋ฏธ๋์์ node server.js๋ฅผ ์๋ ฅํ๋ฉด ์๋ฒ๊ฐ ๋น๋๋ค.
  ๋ธ๋ผ์ฐ์ ์์ localhost:3000  ์ ์ํ๋ฉด ํ์ธ๊ฐ๋ฅํฉ๋๋ค. 

  8) ์๋ฒ ๋๊ธฐ 
  terminal์์ ctrl + c

  10) get(์ฃผ์, ()={} ), send('๊ธ์')

  -2) ๋๊ตฐ๊ฐ๊ฐ localhost:3000/pet์ผ๋ก ๋ฐฉ๋ฌธํ๋ฉด,
  -3) ์๋ด๋ฌธ ๋์ฐ๊ธฐ

  -4) get์์ ํ๋ผ๋ฏธํฐ eng์ด๋ฆ : (request, response) (req,res) ์ฃผ๋ก ์ฌ์ฉํจ

  ๋ธ๋ผ์ฐ์  ์ผ์ localhost:3000/pet  ์ ์ํ๋ฉด ํซ์ฉํ ์ฌ๋ผ๋ ์๋ด๋ฌธ์ด ๋จ์ฃ ?
*/





// ๐route : get, post, put, delete

// ๐get
// ์ฌ์ฉ์๊ฐ / ๊ฒฝ๋ก๋ก ์ ์์ (/ ํ๋๋ง ์์ผ๋ฉด ํํ์ด์ง์๋๋ค)
app.get("/", function (req์์ฒญ, res์๋ต) {
  
  //๐ send()
  //res.send('ig node server')
  
  // ๐html
  // res.sendFile(__dirname + "/index.html");

  //๐ฆc50. ejs : html๊ณผ ๋ฌ๋ฆฌ render(~) ๋ผ๋๊ฑฐ ํท๊ฐ๋ฆฌ์ง ๋ง๊ธฐ
  // ๐index.ejs

  // ๐{ig_title:req์์ฒญ.params.id}
  res์๋ต.render('index.ejs',{ig_title:req์์ฒญ.params.id})

});


// ๐ฆ๐ฆc20 htmlํ์ผ์ ์กํ๊ธฐ,.sendFile(~), Nodemon, ์ค์น์ค๋ฅํด๊ฒฐ powershell๊ด๋ฆฌ์๋ชจ๋
console.log('๐ฆ๐ฆ๐ฆ๐ฆc20')

/* 
  1) nodemon ์ค์น

  1-2)
  npm install -g nodemon
  yarn add global nodemon 

  1-4) nodemon server.js
  ์ด์  ์๋ฒ๋ฅผ ์คํํ  ๋ nodemon server.js ๋ผ๊ณ  ์๋ ฅํด์ฃผ์๋ฉด ๋๊ฒ ์ต๋๋ค.
  ํ์ผ ์ ์ฅํ  ๋ ๋ง๋ค ์ด์  ์ง๊ฐ ์์์ ์๋ฒ๋ฅผ ์๋ก ์์ํด์ค๋๋ค.
  (ํ์ง๋ง ๋ธ๋ผ์ฐ์ ์์ ์๋ก๊ณ ์นจ์ ํ์์ผํฉ๋๋ค.)

  1-5)์๋ฌ๋๋ powershell๊ด๋ฆฌ์๋ชจ๋ ์คํ ๐ set-executionpolicy unrestricted
*/

/* 
  2) ์ฌ์ฉ์๊ฐ / ๊ฒฝ๋ก๋ก ์ ์์ (/ ํ๋๋ง ์์ผ๋ฉด ํํ์ด์ง์๋๋ค)

  4) server.js๋ ๊ฐ์ ๊ฒฝ๋ก์ ์๋ /index.html ์ด๋ผ๋ ํ์ผ์ ๋ณด๋ด์ค๋๋ค. 

  4-2) sendFile() ํจ์๋ฅผ ์ฐ๋ฉด ํ์ผ์ ๋ณด๋ผ ์ ์์ต๋๋ค

  4-4) __dirname์ ํ์ฌ ํ์ผ์ ๊ฒฝ๋ก๋ฅผ ๋ปํฉ๋๋ค. 
*/

// ๐sendFile()
/* 
  app.get('/', function(req์์ฒญ, res์๋ต) {               //2)
    res์๋ต.sendFile(__dirname + '/index.html')       //4)
  })   
*/


// 6) css ์ ์ฉํ๊ธฐ (me...๊ตฌ๊ธ๊ฒ์) โก

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/style.css");
});


// ๐ฆ๐ฆc24 POST์์ฒญ app.post('/add',(res,req)=>{}), body-parser(POST์์ฒญ์ผ๋ก ์๋ฒ์ ๋ฐ์ดํฐ ์ ์ก ์ฝ๊ฒํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ : body-parser, form, input, name)
// ๐write.html
console.log('๐ฆ๐ฆ๐ฆ๐ฆc9')


/*  2) arrow function ์ฌ์ฉ ๊ฐ๋ฅ
2-1) /write์ ์..
2-2) write.html๋ณด๋ด์ค  */

app.get("/write", function (req, res) {
    //res.send('ig node server')
    // res.sendFile(__dirname + "/write.html");

    res.render('write.ejs',{ig_title:req.params.id})
    
});


/* 4)
  ๐์๊ณ ๋ฆฌ์ฆ pseudo-coding
  -1. ๐write.html   ๐      <form action="/add" method="POST">  ์ฝ๋ฉ  , ์๋ฒ์์ input ๊ตฌ๋ถํ๊ธฐ ์ํด nameํ๊ทธ ๋ฃ์
  -2. ์ด๋ค ์ฌ๋์ด /add ๊ฒฝ๋ก(html์ ์ง์ ํ action="")๋ก , POST์์ฒญ ํ๋ฉด, 
  -3. ??์ ํด์ฃผ์ธ์ */


  /* 5)form ๋ฐ์ดํฐ๋ฅผ ์๋ฒ๋ก ์ ์กํ๊ธฐ 
  - body-parser ์ค์น 
  : POST์์ฒญ์ผ๋ก ์๋ฒ์ ๋ฐ์ดํฐ ์ ์ก ์ฝ๊ฒํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ : body-parser, form, input, name
  ( http://expressjs.com/en/resources/middleware/body-parser.html )

  5-2)
  4)๊น์ง๋ง ํด๋ ๋ฐ์ดํฐ๊ฐ ์ ์ ์ก๋๊ธด ํ๋๋ฐ, (์ ์ก๋ ๋ฐ์ดํฐ๋ 'req์์ฒญ'ํ๋ผ๋ฏธํฐ์ ์ ์ฅ๋จ)

  ์ ์ก๋ ๋ฐ์ดํฐ ์ฌ์ฉํ๊ธฐ : body-parser๋ผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์์ด์ผ, ์ฌ๋ฌ๋ถ์ด ๋ณด๋ธ ๋ฐ์ดํฐ๋ค ์ฒ๋ฆฌ๊ฐ ์ฝ๊ฒ ๊ฐ๋ฅํจ.

  ํฐ๋ฏธ๋์ ์ผ์ npm install body-parser ํน์ yarn add body-parser๋ฅผ ํ๋๋ก ํฉ์๋ค. 

  ๐server.js ์๋จ์ ์ถ๊ฐ
  const bodyParser= require('body-parser')
  app.use(bodyParser.urlencoded({extended: true})) 


  5-4)
  input์์ฑ ํ submit clickํ๋ ( ๋๊ตฐ๊ฐ๊ฐ /add ๊ฒฝ๋ก๋ก post ์์ฒญ์ ํ  ๋ ) , ํฐ๋ฏธ๋ ์ฝ์์ฐฝ์ ์์ฒญ.body๊ฐ ์ถ๋ ฅ๋จ

  ์์ฒญ.body๋ ์ฌ๋ฌ๋ถ์ด ํผ์ ์๋ ฅํ ๋ฐ์ดํฐ๊ฐ ๋ค์ด๊ฐ ์์.  
 */

// post() , req์์ฒญ.body.ig_title
/* 
  app.post('/add',function(req์์ฒญ,res์๋ต){    //4-2)

    res์๋ต.send('c24 ์ ์ก์๋ฃํ์ด์ฉ')                       //4-3)
      
    console.log(req์์ฒญ.body)          //5-4)
    console.log(req์์ฒญ.body.ig_title)          //5-4)
    console.log(req์์ฒญ.body.ig_data)          //5-4)

    //  DB์ ์ ์ฅํ๊ธฐ ๐ ๋ค์์๊ฐ์....
  })
*/  



// ๐ฆ๐ฆc28. mongoDB ์ํ, MongoClient.connect(url, function(err, client) {~~} 
// ๐server.js ์๋จ์ ์ฝ๋ ์ถ๊ฐ
/* 
  2) ๊ตฌ๊ธ์ MongoDB Atlas ๊ฒ์ , ๊ฐ์

  4) mongodb  ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
     npm install mongodb  

  8) <โmongoDB - cluster - application code>๋ณต์ฌํด๋์
  (~~~~://๋๋น๊ณ์ ์์ด๋:๋๋น๊ณ์ ํจ์ค์๋~~~/๋ฐ์ดํฐ๋ฒ ์ด์ค์ด๋ฆ~~~~) 

  mongodb+srv://iikim2511:1234qwer@cluster0.o0asn.mongodb.net/<dbname>?retryWrites=true&w=majority

  8-2) mongoDB์ฐ๊ฒฐ๋๋ฉด, 
  8-4) ์ด ์๋ฒ ์ฐ๊ฒฐํด์ฃผ์
*/

// ๐ฆ๐ฆc30 Database์ ์๋ฃ ์ ์ฅํ๊ธฐ, client.db('์๋ช').collection('์๋ช').insertOne(์๋ฃ์ค๋ธ์ ํธ, ์ฝ๋ฐฑํจ์)
//๐์๋จ๋ฐฐ์น const MongoClient = require('mongodb').MongoClient;

console.log('๐ฆ๐ฆc30')

/* 
  1) mongoDB ์ฌ์ดํธ 
  clusters ->collection -> database๋ ํ๋์ ํด๋, collection์ ํ๋์ ์์ํ์ผ์ด๋ผ๊ณ  ์๊ฐํ๋ฉด ๋ฑ ๋ง์ต๋๋ค. 

  2)๐๐uri : iikim2522:dRT2GRSjF5PoHsam : ๋น๋ฐ๋ฒํธ ๋๋ค์์ฑํ์๋ ์ ์์ฑ๊ณตํจ ,
  ๐auto generate password 
   home ๐ Projects ๐ Security ๐Quickstart์์ username edit์ ํํ๊ณ  auto generate password ํด๋ฆญ (๊ฐ๋ quick start์๋์ฌ๋ ์๋๋ฐ, home์์๋ถํฐ ๋์ด์ค๋ฉด ์๊น )
  https://cloud.mongodb.com/v2/62be0862fda87151be53eb94#setup/access
  ๋น๋ฐํ์ผ์ ์จ๊ฒจ์ผํจ. ํดํน๋ ์์์, ์ฐ์ต๋๋ ์ฐ์ต๋๋ ๋๋ง๋ค ๋น๋ฐ๋ฒํธ ์๋ก ์์ฑ
*/



// url, password
let url = process.env.mongoDB_url;

MongoClient.connect(url, function(mongo_err, client) {
  if (mongo_err) throw mongo_err;
  console.log((`ig-Database created!`).bgBrightMagenta)

  let db = client.db('db0921')

  // ๐ฆ๐ฆc32 npm ejs 1, ejs ํ์ผ ๋ง๋ค๊ธฐ
  // ๐write.ejs
  /* 
    ๐ฆ ๋๊ตฐ๊ฐ /add ๊ฒฝ๋ก๋ก POST ์์ฒญ์ ํ๋ฉด, ํผ์ ์๋ ฅ๋ ์๋ฃ๋ฅผ 2๊ฐ๊ฐ ์๋ฒ๋ก ๋์ฐฉํฉ๋๋ค.
      ์ด ๋ ์๋ฃ 2๊ฐ๋ฅผ ~~๋ผ๋ ์ด๋ฆ์ collection์ ์ ์ฅํ๊ธฐ
  */

  // ๐post, bodyParser
  //  post()๋ฅผ ํตํ insetOne()์คํ, send(), req.body.ig_title
  app.post('/add',function (req,res) {    
    // res.send('/add, ์ ์ก์๋ฃ')
    // res.sendFile(__dirname + "/write.html");
    res.render('write.ejs')


    console.log('add fin')

    console.log(req.body)
    console.log(req.body.ig_title)


    // ๐ฆ๐ฆc38 ๊ฒ์๋ฌผ๋ง๋ค id๋ฃ๊ธฐ, auto increment๋ฌธ๋ฒ, findOne(.), insertOne(.)
    /*    
      2) ex)๊ทธ๋ฅ ๋จ์ํ๊ฒ "id:์ด๊ฒ์๋ฌผ๊ฐฏ์+1"ํ๋ฉด 2๋ฒ์งธ ์๋ฃ(id:2)๋ฅผ ์ง์ฐ๊ณ , ์๋ก์ด ๋ฐ์ดํฐ๋ฅผ ๋ฃ์์๋ id:2๊ฐ ๋๋ ์ํฉ์ด ๋ฐ์ํจ
      ์ด๋ ๊ฒ ๋๋ฉด ์๋จ, 
      ์ง์ฐ๊ณ  ์๋ก์ด๊ฑฐ ๋ฃ์ด๋ id:2๋ ๊ณต๋ฐฑ์ด ๋์ด์ผ ํจ
      
      4) find() : ๋ชจ๋  ๋ฐ์ดํฐ ์ฐพ๊ณ ์ถ์๋
      findOne() : ์ํ๋ ๋ฐ์ดํฐ 1๊ฐ๋ง ์ฐพ๊ณ ์ถ์๋  

      findOne({~},function(){}) : {~}๊ฐ ์๋ ์ค๋ธ์ ํธ ๋ญ์น๋ฅผ ์ฐพ์์ค, ๊ทธ ์ค๋ธ์ ํธ ์์ ๋ฐ์ดํฐ๋ค์ ์์ ํ  ์์ 
      
      ~~collection(~)~~.findOne({~~{}~~},function(){
        ~~~~ ์์ ํ  ์ฝ๋~~~
      })


      ๐6) /add๋ก post์์ฒญํ๋ฉด, 
      DB์ ์ด๊ฒ์๋ฌผ๊ฐฏ์ ๋ฐ์ดํฐ ๊ฐ์ ธ์ค์
      
      ๐8) ์๋ก์ด collecton ๋ง๋ฌ
      -> ์ฌ๊ธฐ์ ์๋ฃ๊ฐฏ์๋ฅผ ์ ์ฅํด์ ๊บผ๋๋ ๋ฐฉ์์ ์ฌ์ฉํ  ์์ 
      default๋ก ๋ฐ์ดํฐ ๋ง๋ค์ด๋๊ณ , ๊ฒ์๋ฌผ ๋ง๋ค์ด์ง๋๋ง๋ค totalPost์ซ์ ๋๋ฆฌ๋ ๋ฐฉ์์ ์ฌ์ฉํ  ์์ 
    */

    // ๐c38.findOne, total count    
    // .collecton(~) : ....'~' ์ ์ฐ๊ฒฐ, collecton์ด๋ฆ ์ฌ๊ธฐ์ ์๋ชํ๋ฉด, mongoDB์ ์๋์ผ๋ก ๊ทธ collecton ๋ง๋ค์ด์ง
    db.collection('counter').findOne({name:'total post count'},function (p_err,pp_res) {
      console.log(pp_res)
      console.log(pp_res.totalPost)
      
      // ๐insertOne, _id: pp_res.totalPost+1
      // .insertOne(~) : .insertOne(์ ์ฅํ  ๋ฐ์ดํฐ, ๊ทธ ์ดํ ์คํํ  ์ฝ๋ฐฑํจ์)  ๐ mongoDB์ ๊ฐ๋ฉด ์ ์ฅ๋ ๋ฐ์ดํฐ ํ์ธ๋จ
      db.collection('co0921').insertOne({_id:pp_res.totalPost+1,title: req.body.ig_title, date:req.body.ig_data },function (){
        console.log('insertone success'.blue)      


                
        // ๐ฆ๐ฆc40 ๊ฒ์๋ฌผ๋ง๋ค id๋ฃ๊ธฐ2 - id์ +1ํ๊ธฐ, updateOne(.), mongodb operator $inc $set 
        console.log('๐ฆ๐ฆc40')  
        /*
          10) updateOne({},{},function(){}) : ํ๋์ ๋ฐ์ดํฐ ์์ 
          updateMany() : ํ๋ฒ์ ๋ง์ ๋ฐ์ดํฐ ์์ 

          20-10) post()ํ ๋, 
          findOne() :  collection('~~')์์ name:'๊ฒ์๋ฌผ๊ฐฏ์'๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๊ณ ์๋ ์ค๋ธ์ ํธ ์ ์ฒด๋ฅผ ๊ฐ์ ธ์ด (ex: collection(counter)์ ์ค๋ธ์ ํธ)
          collection("~~")์ insertOne : collection("~~")์  ๊ทธ db๊ฒฐ๊ณผ์ totalPost์ +1์ ํด์ _id๋ง๋ฌ

          20-20) post()ํ  ๋ + collection('~~') ์ insertOneํ ๋ : 
          updateOne() : collection('~~')์์ " name:๊ฒ์๋ฌผ๊ฐฏ์"๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง ์ค๋ธ์ ํธ ์ ์ฒด๋ฅผ ๊ฐ์ ธ์ด. 
          ๊ทธ์์ ๋ฐ์ดํฐ ํ๋(ex: totalPost) ๋ฅผ ์์ ํจ (ex: totalPost+1)

          30) $inc : number data์ +, - ์ํด
          ์์, ์์ ๋๋ค ๊ฐ๋ฅํจ
          +1 : +1 ํด์ค
          -1 : -1 ํด์ค


          30-2) mongodb update operators : 
          https://www.mongodb.com/docs/manual/reference/operator/update/
        */

        // ๐ฆ๐ฆ 40 ๊ฒ์๋ฌผ๋ง๋ค id๋ฃ๊ธฐ2 - id์ +1ํ๊ธฐ, updateOne(.), mongodb operator $inc $set 
        // ๐c40.updateOne, $inc:{totalPost:1}
        db.collection('counter').updateOne({name:'total post count'},{$inc:{totalPost:1}},function (PPP_err,ppp_res) {
          if (PPP_err) {
            return console.log(PPP_err)            
          } 
          
        });
      })
    });
  })

  //๐ฆ๐ฆc34 HTML์ DB๋ฐ์ดํฐ ๋ฃ๋ ๋ฒ 2 (DB๋ฐ์ดํฐ ์ฝ๊ธฐ), .find(.).toArray(์๋ฌ,๊ฒฐ๊ณผ)={}), { posts  ๊ฒฐ๊ณผ }
  // ๐list.ejs

  /* list.ejs ํ์ผ์ ์ฝ๋ฉ
        <!-- ๐ฆc34 ๋ฐ๋ณต๋ฌธ     <%  %>   
            for (let i = 0; i < array.length; i++) {
                array[i];              
            }        
        -->
        
        <%    for (let i = 0; i < ig_posts.length; i++) {   %>  
          <h4>ํ ์ผ ์ ๋ชฉ : <%= ig_posts[i].์ ๋ชฉ %></h4>
          <p>ํ ์ผ ๋ง๊ฐ๋ ์ง : <%= ig_posts[i].๋ ์ง %></p>          
        <%  }  %>        
  */    
  /*
      2).find().toArray() ๋ผ๊ณ  ์ ์ผ์๋ฉด collection(โpostโ)์ ์๋ ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ Array ์๋ฃํ์ผ๋ก ๊ฐ์ ธ์ต๋๋ค. 

      4)list.ejs ํ์ผ์ ๋ ๋๋งํจ๊ณผ ๋์์ {ig_posts: ๊ฒฐ๊ณผ} ๋ผ๋ ๋ฐ์ดํฐ๋ฅผ ํจ๊ป ๋ณด๋ด์ค ์ ์์ต๋๋ค. 
      (์ ํํ ๋งํ๋ฉด ๊ฒฐ๊ณผ๋ผ๋ ๋ฐ์ดํฐ๋ฅผ ig_posts ๋ผ๋ ์ด๋ฆ์ผ๋ก ejs ํ์ผ์ ๋ณด๋ด์ฃผ์ธ์~ ์๋๋ค)
  */

      
  // ๐c34. list
  app.get("/list", function (req, res) {

    // find().toArray()
    db.collection('co0921').find().toArray(function (err,p_db๊ฒฐ๊ณผ) {
      console.log(p_db๊ฒฐ๊ณผ)
      
      // ejs
      //res.render
      res.render('list.ejs',{ig_posts:p_db๊ฒฐ๊ณผ});
    })

  });

  // ๐c34-2. list-reverse
  app.get("/list-reverse_c34", function (req, res) {

    // find().toArray()
    db.collection('co0921').find().toArray(function (err,pp_res) {
      console.log(pp_res)
      
      // ejs
      //res.render
      res.render('list-reverse_c34.ejs',{ig_posts:pp_res});
    })

  });


  // ๐ฆ๐ฆc42 AJAX๋ก DELETE ์์ฒญํ๊ธฐ1, $.ajax(.), app.delete('delete',(.)={})
  // ๐ฆ๐ฆc44 AJAX๋ก DELETE ์์ฒญํ๊ธฐ2, deleteOne(.), data-~~, .dataset.~~, parseInt(.)
  // ๐ฆ๐ฆc46 AJAX๋ก DELETE ์์ฒญํ๊ธฐ3, jQuery๊ธฐ๋ฅ .status(~).send(~)
  console.log('๐ฆ๐ฆc42,44,46')

  //c44) ๐req์์ฒญ.body์ ๋ด๊ฒจ์จ id๋ฅผ ๊ฐ์ง ์ค๋ธ์ ํธ๋ฅผ db์์ ์ฐพ์์, ์ญ์ 
  // ๐./views/list.ejs

  // ๐c42, delete
  app.delete('/delete', function (req,res) {
    
    console.log(`delete`.bgBrightMagenta)
    console.log(req.body)

    /*๐
      "req์์ฒญ.body.~id"๋ฅผ number๋ก ๋ฐ๊ฟ  -> "req์์ฒญ.body"๋ฅผ deleteOne()์ ์ฌ์ฉํจ. 
      ("req์์ฒญ.body._id"  ๊ฐ ์๋๋ผ. "req์์ฒญ.body") 
    */
    req.body._id = parseInt(req.body._id);

    // ~.deleteOne()
    db.collection('co0921').deleteOne(req.body, function (pp_err, pp_res) {
         console.log('ig delete fin')

      // c46-30) ์ฑ๊ณต์ฝ๋ 200:  res์๋ต.status(200).send({message : "c46, success"});  
      // ๐ list.ejs
      res.status(200).send({message:"ig delete fail"});

      // c46-40) ์คํจ์ฝ๋ 400:  res์๋ต.status(400).send({message : "c46, fail"});        
      // res์๋ต.status(400).send({message : "c46, fail"});
    })
    
  });


  // ๐ฆ๐ฆc48 ์์ธํ์ด์ง๋ฅผ ๋ง๋ค์ด๋ณด์ id (URL parameter), req์์ฒญ.params.id
  // ๐/views/detail.ejs
  
  /* 
    ๐๋ชฉํ: /detail๋ก ์ ์ํ๋ฉด detail.ejs ๋ณด์ฌ์ฃผ๊ธฐ 

    -2) :id : URL parameter
    = req์์ฒญ.params.id  = 'detail/:id'

    -4)findOne({~},function(){}) : {~}๊ฐ ์๋ ์ค๋ธ์ ํธ ๋ญ์น๋ฅผ ์ฐพ์์ค

    -6) parseInt() :  db์ id๋ int์ธ๋ฐ, ์ฝ๋๋ฅผ ํ์ธํ๋ฉด string์ผ๋ก ๋์ด -> parseInt()๋ถ์ฌ์ number๋ก ๋ง๋ฌ
    ํ: ๋ง์ฐ์ค๋ฅผ hoverํ๋ฉด JavaScript type์ ์๋ ค์ค

    -8).render('~c~',{ ~b~ : ~a~ }) : ~a~๋ฐ์ดํฐ๋ฅผ, ~b~์ด๋ฆ์ผ๋ก,  ~c~~๋ก ๋ณด๋,
  */
  // :id
  app.get('/detail/:id',function (req,res) {

    //  req์์ฒญ.params.id 
    // findOne({~},function(){})
    // parseInt 
    db.collection('co0921').findOne({_id: parseInt(req.params.id)},function (pp_err,p_res) {
      console.log(p_res)

      // .render('~c~',{ ~b~ : ~a~ })
      res.render('detail.ejs',{ig_data: p_res, ig_title:req.params.id})      
    });    
  });



  // ๐ฆ๐ฆc50 ejs include ๋ฌธ๋ฒ(= react components), staticํ์ผ, express.static('public') 
  // ๐์๋จ์ฝ๋) app.use('.public', express.static('pulbic'));
  //  ๐ ./views/nav.html 
  // ๐./views/~~~.ejs

  /* 
    2)
    ๐./public/style.css ๋ง๋ค๊ธฐ

      static files๋ publicํด๋์์ ๋ณด๊ดํ๋๊ฒ ๊ด์ต
      CSSํ์ผ์ด ์ฌ๊ธฐ์ ํด๋น๋จ
      (static files : ๋ฐ์ดํฐ์ ์ํด ๋ณํ์ง ์๋ ํ์ผ) 

    4) ๐์๋จ์ฝ๋) app.use('.public', express.static('pulbic'));
    static ํ์ผ ๋ณด๊ด์ํด publicํด๋ ์ธ๊ฑฐ๋ผ๋ ๋ป

    6) ๐ ./views/nav.html ๋ง๋ค๊ธฐ

      ๊ณต์ ํ  html ํ์ผ : 
      viewsํด๋
      htmlํ์  (ejs X)
      
      ์ ์ฉ์ ~.ejsํ์ผ์๋ง ์ ์ฉ๊ฐ๋ฅํจ
  
    8)๐./views/~~~.ejs์ ์ฝ์ํ๊ธฐ

      ์ฌ๊ธฐ ์ด์๋ฆฌ์ nav_c50.html์ ๋ฃ์์์์
      <%- include('nav_c50.html') %>  

    10)
      ๐./views/index.ejs ํ์ผ๋ณ๊ฒฝ, ํด๋์ด๋.. 
      ๐./views/write.ejs ํ์ผ๋ณ๊ฒฝ, ํด๋์ด๋.. 
  
    app.listen(3000, function(){
        console.log('c30 listening on 3000')
      });
  */


  // ๐ฆ๐ฆc52 ๊ธ ์์  =PUT=update, html์์ PUT์์ฒญํ๊ธฐ, method-override 
  // ๐update.ejs, update-id.ejs
  /* 
    1 'update' - 'update-id'ํ์ด์ง ๋ฐ๋ก๋ง๋ฌ
    2. app.get()๋ ๋ฐ๋ก ๋ง๋ฌ
    ์๋ฌ์์ด ์ ์์๋๋จ
  */
  app.get("/update", function (req, res) {
    res.render('update.ejs')
  });

  // ๐ /update/:id
  app.get("/update/:id", function (req, res) {
    db.collection('co0921').findOne({_id: parseInt(req.params.id)},function (pp_err, p_db๊ฒฐ๊ณผ) {    
        
      console.log(p_db๊ฒฐ๊ณผ)
      res.render('update-id.ejs',{ig_post: p_db๊ฒฐ๊ณผ})      
    })
  });


  // ๐ฆ๐ฆ๐ฆc54, ๐update-id.ejs

  app.put('/update-id',function (req,res) {

    console.log(res.body)

    db.collection('co0921').updateOne({_id:parseInt(req.body.ig_id)},{$set:{title: req.body.ig_title, date: req.body.ig_date}},function (p_err, p_res) {
      console.log('ig- update- fin')

      // ๐redirect
      // res.render('list.ejs'); ๋ก ํ๋ฉด ์๋ฌ๋จ (์์ธ์ง๋ ๋ชจ๋ฆ)
      res.redirect('/list');
    })
  });


  // ๐ฆ๐ฆc56 (ํ์ ๋ก๊ทธ์ธ0) ์ธ์, JWT, OAuth ๋ฑ ํ์์ธ์ฆ ๋ฐฉ๋ฒ ์ดํดํ๊ธฐ
  // ๐ฆ๐ฆc58 (ํ์ ๋ก๊ทธ์ธ1) ๋ฏธ๋ค์จ์ด, app.use(~), passport, express-session, passport.authenticate(~), passport.use(new LocalStorategy(~))
  // ๐ฆ๐ฆc60 (ํ์ ๋ก๊ทธ์ธ2) passport-local, passport.serializeUser(~), bcryptjs
  // ๐ฆ๐ฆc62 (ํ์ ๋ก๊ทธ์ธ3) mypage.ejs, middleware๋ก๊ทธ์ธํ์ธ, passport.deserializeUser, req.user: db์ ๋ฐ์ดํฐ
  // ๐mypage.ejs
  // ๐login_c58.ejs

  console.log('๐ฆ๐ฆc56,58,60,62')

  // ๐c58-10)
  // passport
  const passport = require('passport');

  // passport-local
  const LocalStrategy = require('passport-local').Strategy;

  // express-session
  const session = require('express-session');

  // middleware
  app.use(session({ secret: 'ig123', resave: true, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());


  app.get('/login',(req,res)=>{
    res.render('login_c58.ejs');
  });


  app.get('/login_fail',function (req,res) {
    res.render('login_fail.ejs')    
  })


  // ๐passport
  /*๐-20)
    passport.authenticate('local') : (์ธ์ฆํด์ฃผ์ธ์)ํจ์ ,    
    ์ธ์ฆ ์คํจ์ (failureRedirect : '/fail') :  '/login_fail' ๋ก ์ฐ๊ฒฐ 
    ์ธ์ฆ ์ฑ๊ณต์ : res์๋ต.redirect('/') 
  */
  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login_fail' }),
    function(req, res) {
      console.log('๐ฆc58. login')
      res.redirect('/');
    });


  // ๐passport-local
  // ๐c60-30) passport.authenticate('local',~)...๋ก๊ทธ์ธ ์ฑ๊ณต์, ๋ค์์ฝ๋ ์คํ๋จ
  passport.use(new LocalStrategy(
    {
    usernameField:'id',             // ๐login_c58.ejs
    passwordField:'pw',            // ๐login_c58.ejs
    session: true,                       // login ํ session์ ์ ์ฅํ ๊ฒ์ธ์ง?
    passReqToCallback:false,
    },
    function(์๋ ฅํusername, ์๋ ฅํpassword, done) {
      db.collection('login').findOne({ id: ์๋ ฅํusername }, function (err, user์ ๋ณด) {

        console.log(colors.bgYellow('passport.use(new LocalStrategy'))            
        console.log(์๋ ฅํusername,์๋ ฅํpassword)
        console.log(user์ ๋ณด)

        /*-40)
          error์ฒ๋ฆฌ
          DB์ ID๊ฐ ์์๋
          DB์ ID๊ฐ ์์๋
          DB์ ID๊ฐ ์์ผ๋ฉด, input password == DB password ๋น๊ตํจ

          -50)
          done: 3๊ฐ์ argument๋ฅผ ๊ฐ์ง
          done(์๋ฒ์๋ฌ, ์ฑ๊ณต์ ์ฌ์ฉ์ db๋ฐ์ดํฐ, ์๋ฌ ๋ฉ์์ง)

          -60)        
          ์๋ ฅํ ๋น๋ฐ๋ฒํธ๋ฅผ ์ํธํํ ํ ,DB์ ๋น๋ฐ๋ฒํธ์ ๋น๊ตํด์ผํจ (๋์ค์ ์์์ ํ์ธ์)
        */

        if (err) { return done(err); }
        if (!user์ ๋ณด) { return done(null, false,{message:'์กด์ฌํ์ง์๋ ์์ด๋์๋๋ค'}); }
        if (์๋ ฅํpassword !== user์ ๋ณด.pw) { 
          return done(null, false,{message: '๋น๋ฒ ํ๋ฆผ'});
        }
        return done(null, user์ ๋ณด,{message:'์ฑ๊ณต'});

      });
    }
  ));

  // ๐passport.serializeUser
  // login ์ฑ๊ณต ๋, id๋ฅผ ์ด์ฉํด์ session์ local์(?) ์ ์ฅ (session์ id์ ๋ณด๋ฅผ cookie๋ก ๋ณด๋)
  // ๐f12 -> Application -> Cookies์์ ํ์ธ
  passport.serializeUser(function(user์ ๋ณด, done) {
    console.log(colors.bgYellow('passport.serializeUser'))
    console.log(user์ ๋ณด)

    done(null, user์ ๋ณด.id);
  });


  // ๐ฆc62,  ๐mypage.ejs
  // ๐ passport.deserializeUser
  // login ์ฑ๊ณต ๋, ์์ session๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง์ฌ๋(loginํ ์ ์ )์ ์ ๋ณด๋ฅผ db์์ ์ฐพ์์ค
  // user์ ๋ณด : db์์ ์ฐพ์ ์ ๋ณด
  // p_id : passport.serializeUser์์์ use์ ๋ณด.id
  passport.deserializeUser(function(p_id, done) {
    db.collection('login').findOne({id:p_id}, function (err, user์ ๋ณด) {
      done(err, user์ ๋ณด);
    });
  });

  // ๐62-50. app.get("/mypage",~~~~), 
  // ๐req.user : db์ ๋ฐ์ดํฐ
  app.get("/mypage",middleware๋ก๊ทธ์ธํ์ธ, function (req, res) {
    console.log(colors.bgBrightYellow(`/mypage : req.user`))
    console.log(req.user)
    res.render('mypage_62.ejs',{ig_mypage์ ์ ์ ๋ณด: req.user})
  });

  //๐ฅ62-50. middleware๋ก๊ทธ์ธํ์ธ
  // req.user๊ฐ ์์ผ๋ฉด next() : ํต๊ณผ  ๐app.get("/mypage",~~~~์คํ
  // req.user๊ฐ ์์ผ๋ฉด res.render(~~)  (html์ ๋ฉ์์ง ๋์)
  function middleware๋ก๊ทธ์ธํ์ธ(req,res,next) {
    if (req.user) {
      console.log(colors.bgBrightGreen('middleware๋ก๊ทธ์ธํ์ธ'))
      next()    
    } else {
      // res.send('๋ก๊ทธ์ธ ์ํ์ต๋๋ค.');    
      res.render('login_fail.ejs')    
    }  
  }



  // ๐ฆ๐ฆc64 .env ํ์ผ, environment variable, ๊ฐ๋ณ์ ์ธ ๋ณ์ ๋ฐ์ดํฐ๋ค ๊ด๋ฆฌํ๊ธฐ 
  // ๐.env  
  console.log('๐ฆ๐ฆc64 ')


  /* 
    ๐ npm install dotenv

    ๐ ๐์๋จ์ฝ๋ : 
      root folder์ .envํ์ผ ๋ง๋ค๋ : require('dotenv').config()
      ๋ค๋ฅธ folder(env_c64)์ .envํ์ผ ๋ง๋ค๋ : require('dotenv').config({path: "./env_c64/.env"})
    
    ๐ server.js์ ๊ฐ์ ํด๋์ '.env'ํ์ผ ๋ง๋ฌ
    ๐.env  
  */


  //๐ฆ๐ฆc66 ๊ฒ์๊ธฐ๋ฅ1 Query string parameters, ('/search?value='+์๋ ฅํvalue), req.query.value, window.location.replace('/~')
  // ๐views/list.ejs : html, javascript 
  


  /* 
    ๐c66) Query string parameters : 
    b ๊ฒ์ํ๋ฉด url๋ค๋ก ๋ชฐ๋ ์ ๋ณด๋ฅผ ์ ๋ฌํจ
    ? ~~a~~ = ~~b~~

    ๐c66-20) server.js์์ query string๊บผ๋ด์, DB์์ ๋ฐ์ดํฐ ๊บผ๋. 

    -a) req์์ฒญ.query : getํจ์์์ ์์ฒญ.body ์ฐ๋๊ฒ๊ณผ ๋น์ทํ๊ฒ ์ฌ์ฉํ๋ ๋ฐฉ์์

    -b)
      collection().findOne()           : 1๊ฐ ์ฐพ์ ๋
      collection().find().toArray()     : ์ฌ๋ฌ๊ฐ ์ฐพ์ ๋
    */
  app.get('/search_c68',(req,res)=>{
    
    // ๐ฅreq.query 
    console.log(req.query)
    console.log(req.query.value)

     // ๐ฅ collection().find().toArray()  
    // find({์ ๋ชฉ:req์์ฒญ.query.value})  ๐ ๋ฌธ์ ์ : ์ ํํ ์ผ์นํ๋ ๊ฒ๋ง ์ฐพ์์ค
    db.collection('co0921').find({title:req.query.value}).toArray((p_err,p_db๊ฒฐ๊ณผ)=>{
      
      console.log(colors.bgBrightMagenta('get./search_c68'))
      console.log(p_db๊ฒฐ๊ณผ)

  
      //๐ฆ๐ฆc68 ๊ฒ์๊ธฐ๋ฅ2 mongoDB์ฌ์ดํธ...indexํญ, Binary Search, 
      // ๐views/๐search_c68.ejs

      /*
        ๐-30) ๐mongoDB์ฌ์ดํธ  collection ๐ index
        ๊ฐ๋๋ค๋ผ ์ ๋ ฌ
        ์ค๋ฆ์ฐจ์, ๋ด๋ฆผ์ฐจ์
        ๋์์ ์ฌ๋ฌ๊ฐ ์ค์ ๊ฐ๋ฅํจ      
      */

      res.render('search_c68.ejs',{ig_posts:p_db๊ฒฐ๊ณผ});

    })
  });
   

  //๐ฆ๐ฆc70 ๊ฒ์๊ธฐ๋ฅ3 mongoDB์ฌ์ดํธ...search indexํญ, $.parma(~), $("#form").serialize(~), aggregate(~), $search, $sort,$limit, $project, {$meta:"searchScore"}
  // ๐mongoDB์ฌ์ดํธ  collection ๐ index
  // ๐ mongoDB์ฌ์ดํธ...search indexํญ ํ์ฉํจ

  /* 
    ๐70-2) me: okky์ฒ๋ผ ๊ตฌ๊ธ๋ก ๊ฒ์์ด๋์ํค๋ ๋ฐฉ๋ฒ๋ ์์, 
  */


    app.get('/search_c70',(req์์ฒญ,res์๋ต)=>{

      console.log(colors.bgBrightMagenta('get./search_c70'))
      console.log(req์์ฒญ.query.value)

      //  ๐70-15) .find(๊ฒ์์กฐ๊ฑดpipeline).toArray()
      // ๐mongoDB์ฌ์ดํธ  collection ๐ index
      // {title:req์์ฒญ.query.value} : full scanํ๋ ์ด์  ๋ฐฉ๋ฒ      
      /*      
        db.collection('co0921').find({title:req์์ฒญ.query.value}).toArray((P_err,p_db)=>{
          console.log(p_db)
          res์๋ต.render('search_c70.ejs',{ig_posts:p_db});
        }); 
      */


      // ๐์คํจํจ {$text:{ $search: req์์ฒญ.query.value}}
      /*  
        db.collection('co0921').find({$text:{ $search: req์์ฒญ.query.value}}).toArray((P_err,p_db)=>{
          console.log(p_db)
          res์๋ต.render('search_c70.ejs',{ig_posts:p_db});
        }); 
      */


      
      //  ๐70-20) .aggregate(๊ฒ์์กฐ๊ฑดpipeline).toArray()  
      // ๐ mongoDB์ฌ์ดํธ...search indexํญ ํ์ฉํจ      
      /* 
        ๐70-30)
          $sort : 
          ๊ฒฐ๊ณผ์ ๋ ฌ
          _id ์์ผ๋ก ์ ๋ ฌ
          1, -1 :  ์ค๋ฆ์ฐจ์, ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ

          $limit :
          ์์ 10๊ฐ๋ง ๊ฐ์ ธ์์ฃผ์ธ์...๋ผ๋ limit

          $project : ๊ฒ์๊ฒฐ๊ณผ์์ ์ํ๋๊ฒ๋ง ๋ณด์ฌ์ค
          1 : ๊ฒ์๊ฒฐ๊ณผ ๋์ด
          0 : ๊ฒ์๊ฒฐ๊ณผ ๋์ค์ง ์์
          ํญ๋ชฉ์ ๋ฃ์ง์์๋, ๊ฒ์๊ฒฐ๊ณผ ๋์ค์ง ์๋๊ฑธ..๋ก ์๊ณ ์์

          searchScore:  ๊ฒ์์ด์ ๊ฒ์๋ฌผ์ ๊ด๋ จ์์ด ๋์๊ฒ, ๊ฒ์ ๋ง์ด ํ๋ ํญ๋ชฉ์ score๊ฐ ๋์์ง

          score๋ collection์ ์์ด๋ ์ด๋ฐ์์ผ๋ก ์ฝ๋ฉํ๋ฉด , 
          ๊ฒ์๊ฒฐ๊ณผํํฐ๋ง์ผ๋ก ๋ฃ์ด์ค      
      */

      let ๊ฒ์์กฐ๊ฑดpipeline =[
        {
          $search:{
            index : "ig_titleSearch",
            text:{
              query: req์์ฒญ.query.value,
              path: ["title",'date']        //db์์ ์ค๋ธ์ ํธ ์ด๋ฆ
            }  
          }
        },
        // 70-30)$sort, $limit,$project
        {$sort :{_id :1}},
        {$limit : 10},
        {$project : {title : 1, date:1, _id: 0, score :{$meta : "searchScore"}}}
      ];
      db.collection('co0921').aggregate(๊ฒ์์กฐ๊ฑดpipeline).toArray((err,p_db๊ฒฐ๊ณผ)=>{
        console.log(p_db๊ฒฐ๊ณผ)  
  
        res์๋ต.render('search_c70.ejs',{ig_posts:p_db๊ฒฐ๊ณผ});
      })       
    });


    //๐ฆ๐ฆ 72 ํ์ ๊ธฐ๋ฅ...๊ฒ์ํ ๊ธฐ๋ฅ, req.body._id, req.user._id 
    // ๐./views/register_c72.ejs
    // ๐./views/list.ejs
    
    console.log('๐ฆ๐ฆc72 ')
    /*
      ๐(๋์ค์ ์์์ ์ถ๊ฐ)
        ๐id์ค๋ณต๊ฒ์ฌํ๊ณ  ์ ์ฅํ๊ธฐ 
        ๐id์ ์ํ๋ฒณ, ์ซ์ ์ ๋ค์ด์๋ ๊ฒ์ฌํ๊ณ  ์ ์ฅํ๊ธฐ 
        ๐๋น๋ฒ ์ ์ฅ์ ์ ์ํธํํ๋     

        ๐
        ์์ด๋ park์ผ๋ก, ์์ด๋kim์ผ๋ก ์๊น ์ ์ฅํ ๊ฒ์๋ฌผ ์ญ์ ํด๋ณด๊ธฐ
        ๐ui๋ก๋ ์ญ์ ๋๋๋ฐ, ์๋ก๊ณ ์นจํด๋ณด๋ฉด ์ญ์ ์๋๊ณ  ๊ทธ๋๋ก์ธ๊ฑธ ํ์ธํ  ์ ์์
    */

    app.get('/register_c72', (req์์ฒญ,res์๋ต)=>{
      res์๋ต.render('register_c72.ejs')

    });
    
    //๐register postํ๊ธฐ : passport~~~ ์ฝ๋ ๋ฐ์ ์ฝ๋ฉํด์ผํจ
    app.post('/register_post', (req์์ฒญ,res์๋ต)=>{
      
      console.log(colors.bgBrightMagenta('register_post'))
      console.log(req์์ฒญ.body.id)

      // ๐insertOne({id:req์์ฒญ.body.id, pw:req์์ฒญ.body.pw}, : post๋ก ๋์ด์จ req์์ฒญ.body.~ ๋ฐ์ดํฐ ์ ์ฅ
      db.collection('login').insertOne({id:req์์ฒญ.body.id, pw:req์์ฒญ.body.pw},function (p_err,p_db) {

        // ๐redirect
        res์๋ต.redirect('/');         
      })
    });


    // ๐writeํ ๋, ๋ก๊ทธ์ธ ํ ์์ฑ์๋ ์ถ๊ฐํ๊ธฐ : passport~~~ ์ฝ๋ ๋ฐ์ ์ฝ๋ฉํด์ผํจ
    // ๐register_c72.ejs
    app.post('/add_c72',function (req์์ฒญ,res) {    
      
      console.log((`app.post('/add_c72'`).bgBrightMagenta)  
      console.log(req์์ฒญ.body)
      console.log(req์์ฒญ.body.ig_title)

      res.render('register_c72.ejs')


      /* 
        ๐์์ฑ์: req์์ฒญ.user._id        
          req์์ฒญ.user._id : ํ์ฌ ๋ก๊ทธ์ธํ ์ฌ๋์ ์ ๋ณด
          req์์ฒญ.user.pw  : ํ์ฌ ๋ก๊ทธ์ธํ ์ฌ๋์ password
      */
      let ์ ์ฅํ ๊ฒ = {์์ฑ์: req์์ฒญ.user._id , title: req์์ฒญ.body.ig_title, date:req์์ฒญ.body.ig_data}

      db.collection('co0921').insertOne(์ ์ฅํ ๊ฒ,function (p_err, p_db๊ฒฐ๊ณผ) {

        console.log('co0921-saved')        
      })      
    })

    
    // ๐delete, ์ค์  ๋ก๊ทธ์ธ ํ _id == ๊ธ์ ์ ์ฅ๋ _id ๊ฐ์๋๋ง ์ญ์ ํ๊ธฐ : passport~~~ ์ฝ๋ ๋ฐ์ ์ฝ๋ฉํด์ผํจ
    // ๐./views/list.ejs

    /* 
      ๐์์ด๋ park์ผ๋ก, ์์ด๋kim์ผ๋ก ์๊น ์ ์ฅํ ๊ฒ์๋ฌผ ์ญ์ ํด๋ณด๊ธฐ
      ๐์ผ๋จ ํ๋ฉด์์ ์ญ์ ๋๋๋ฐ, ์๋ก๊ณ ์นจํด๋ณด๋ฉด ์ญ์ ์๋๊ณ  ๊ทธ๋๋ก์ธ๊ฑธ ํ์ธํ  ์ ์์
    */

      app.delete('/delete_c72', function (req,res) {
        
        console.log(req.body)

        req.body._id = parseInt(req.body._id);

        // ๐{_id:req.body._id, ์์ฑ์:req.user._id} ๋๋ค ๋ง์กฑํ๋ ๊ฒ์๋ฌผ์ ์ฐพ์์ deleteํด์ค
        let ์ญ์ ํ ๋ฐ์ดํฐ = {_id:req.body._id, ์์ฑ์:req.user._id}

        //๐๊ธฐ์กด c41์์์ ์ฝ๋์์ ์ฐจ์ด์  :  db.collection('co0921').deleteOne(req.body, function (pp_err, pp_res) {
        db.collection('co0921').deleteOne(์ญ์ ํ ๋ฐ์ดํฐ, function (pp_err, pp_res) {
            console.log('ig delete fin')

          res.status(200).send({message:"ig delete fail"});
        })        
      });



    //๐ฆ๐ฆc74 router(=app.get(~)๋ฌถ์)๊ด๋ฆฌ, router.get(์ฃผ์, ๋ฏธ๋ค์จ์ด, ํจ์), router.use(๋ฏธ๋ค์จ์ด)
    // ๐ ./routes/shop_c74.js
    // ๐ ./routes/zoo_c74.js
    
    /*๐ app.get(~) ๋ฌถ์ ๊ด๋ฆฌํ๊ธฐ
       routes : ๋๋ฌด ๋ง์ app.get(~)์ 1๊ฐ์ ํ์ผ๋ก ๋ฌถ์ด์ ๊ด๋ฆฌํ๊ธฐ
      
       ๐ https://expressjs.com/en/guide/routing.html
    */

    // ๐ app.use(๋ฏธ๋ค์จ์ด)
    // ๐ ./routes/shop_c74.js
    //  ./rountes/shop_c74.js ํ์ผ์ ์ฌ๊ธฐ์ ์ฒจ๋ถ
    app.use('/', require('./routes/shop_c74.js'))
    
    
    //๐ /shop2 
    // ๐ ./routes/shop2_c74.js
    app.use('/shop2', require('./routes/shop2_c74.js'))



    // ๐๋ฏธ๋ค์จ์ด ํจ์ ์ ์ฉํ๋๋ฒ : ig_middleware
    // ./rountes/zoo_c74.js ํ์ผ์ ์ฌ๊ธฐ์ ์ฒจ๋ถ
    
    app.use('/zoo', require('./routes/zoo_c74.js'))

        
    // ๐ฆ๐ฆc76 Google Cloud(=AWS) ์ฌ์ดํธ๋ฐฐํฌ, app.yaml, gcloud init, gcloud app deploy
    // ๐๋ธํธํ๊ธฐ ํ์ ์ฐธ๊ณ 
    // ๐app.yaml
    // ๐Google Cloud - App Engine - dash board

    /* 
      ๐2. server.js์ ์๋ฒ๋ฅผ ๋์ธ ๋ ํฌํธ๊ฐ 8080์ธ์ง ํ์ธํฉ๋๋ค.
        Google cloud default port : 8080     ย 

      ๐๋ช๋ น์ด
        gcloud init
        gcloud app deploy
    */


  
        
    // ๐ฆ๐ฆc78 ์ด๋ฏธ์ง ์๋ก๋ & api๋ง๋ค๊ธฐ, enctype="", multer, upload.array(~,~)
    // ๐views/upload_c78.ejs
    // ๐./public/image_c78

    // ๐ ?? ์ local publilc/image/~ ํด๋์ ์ ์ฅํ๋์ง ์ดํด ๋ชปํ์. DB์ ์ ์ฅํด์ผ API๋ก ์ฌ์ฉํ ์์๋๊ฒ ์๋๊ฐ?


    /* 
      ๐-10) upload.ejs ๋ง๋ฌ : ๐views/upload_c78.ejs
    */

    app.get('/upload',(req์์ฒญ,res์๋ต)=>{
      res์๋ต.render('upload_c78.ejs');
    });

    /* 
      ๐-20) npm install multer

          diskStorage : ์ปดํจํฐ ํ๋์์ ์ ์ฅ
          memoryStorage : ๋จ์์ ์ ์ฅ. ํ๋ฐ์ฑ..์ ์ฅ
    */
    const multer = require('multer')

    // ๐diskStorage
    const storage = multer.diskStorage({

      // ๐๊ฒฝ๋ก : './public/image_c78'
      destination: function (req, file, cb) {
        cb(null, './public/image_c78')
      },

      // ๐file name ์ค์  : file.originalname
      filename: function (req, file, cb) {
        console.log((`multer-filename-file`).bgBrightMagenta)
        console.log(file)

        /* ๐ํ์ผ๋ช ์ถ๊ฐ๋ก ๋ฃ๊ธฐ      
          a) 
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.originalname + '-' + uniqueSuffix)    

          b) 
          cb(null, file.originalname + '๋ ์ง:' + new Date())    
        */
        cb(null, file.originalname)
        
      }
    })

    // ๐const upload : ๋ชจ๋ ์ค์ ...const upload์ ์ ์ฅํจ. const multer , const storage ๊ฐ์ ธ์ด

    const upload = multer({
      storage: storage,

      /* 
        // ๐fileFilter : PNG, JPG๋ง ์๋ก๋ํ๊ธฐ
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                return callback(new Error('PNG, JPG๋ง ์๋ก๋ํ์ธ์'))
            }
            callback(null, true)
        },

        // ๐limits : ํ์ผ์ฌ์ด์ฆ ์ ํ
        limits:{
            fileSize: 1024 * 1024
        }
      */
    });


    /* 
      ๐-30
          upload.ejs์์ post์์ฒญ์ค๋ฉด

          ./public/imageํด๋์์ ์ ์ฅํจ
    */

    /* 
      ๐๋ฏธ๋ค์จ์ด const upload : upload.single('ig_uploadInput')
      ๐./views/upload.ejs์  <input type="file" name="ig_uploadInput"> ์ name="ig_uploadInput"๊ฐ์ ธ์ด
    */
    app.post('/upload',upload.single('ig_uploadInput'),(req์์ฒญ,res์๋ต)=>{
      res์๋ต.send('c78_fin');
    });

    /* 
      ๐-40 API๋ง๋ค๊ธฐ (์๋ก๋ํ ์ด๋ฏธ์ง... API๋ก ๋ง๋ค๊ธฐ)

      ๐URLํ๋ผ๋ฏธํฐ 
      
        a) ์ด๋ฆ์ง๊ธฐ๐ :ig_imageName

          ์ ์ฉ ๐ req์์ฒญ.params.ig_imageName


        b) ํ์ผ๊ฒฝ๋ก : __dirname +'/public/image_c78'


        c) html์ imgํ๊ทธ์ ์ ์ฉํ๊ธฐ (ํ์ผ๋ช :   test_c78.jpg)
        ๐upload_c78.ejs
        <img src="/public_c50/image_c78/test_c78.jpg" alt="">
    */

    app.get('/image_c78/:ig_imageName',(req์์ฒญ,res์๋ต)=>{
      res์๋ต.sendFile(__dirname +'/public/image_c78'+ req์์ฒญ.params.ig_imageName)
    })



    // ๐ฆ๐ฆ80 ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์๊ฐ helmet.js , Mongoose, Connect-mongo, OAuth์์๋ก๊ทธ์ธ
    /* 
      ๋ณด์ : helmet.js ๋ผ์ด๋ธ๋ฌ๋ฆฌ 
      ex) express์ฌ์ฉํ๊ณ ์๋ค๋ ์ ๋ณด...์จ๊ฒจ์ค ํ์๊ฐ ์์

      Mongoose : mongodb ๋ฐ์ดํฐ์ ์ฅํ ๋ ๊ฒ์ฌ๋์์ค

      OAuth์์๋ก๊ทธ์ธ 
      Connect-mongo : ์ธ์๋ฐ์ดํฐ..db์ ์ฅ  ...์ฌ์ฉํ๋ฉด ์๋ ์๋๋ ค์ง๊ณ  ์ข์
    */


    //๐ฆ๐ฆ82, 84, 86 ์น์์ผ์ผ๋ก ์ฑํ์๋น์ค ๋ง๋ค๊ธฐ 1 (Socket.io)
    

    // ๐ฆ๐ฆ88 Node์๋ฒ+ React ํฉ์น๊ธฐ, app.get("*",~), ๋ฆฌ์กํธ router์ฌ์ฉ, proxy ๋ผ์ด๋ธ ์ฝ๋ฉ

    /*   
        ๋ฆฌ์กํธ ๋ผ์ฐํฐ์์ ๋ค ํด๊ฒฐํด์ฃผ๋ฏ๋ก, ์๋ฒ์ ์ญํ ์  db์ฐ๊ฒฐ๋ง์ผ๋ก ์ถ์์ํฌ์์์

        ์ผ๋ฐ ์๋ฐ์คํฌ๋ฆฝํธ ํ์ด์ง ๋ณด๋ค๊ฐ,
        ํน์ ํ์ด์ง ๋ค์ด๊ฐ์๋, ๋ฆฌ์กํธ ํ์ด์ง ๋ณด์ฌ์ฃผ๋ ๋ฒ

        "/" ์ ์ : ์๋ฐ์คํฌ๋ฆฝํธ htmlํ์ด์ง ๋ณด์ฌ์ค
        "/react"์ ์ :  ๋ฆฌ์กํธ ํ์ด์ง ๋ณด์ฌ์ค

        ๋ฏธ๋ค์จ์ด : ์๋ฒ์ ์์ฒญ๊ณผ ์๋ต์ฌ์ด์ ์คํํ  ์ฝ๋ , 
        ์ ์ ๊ฐ /~~url๋ก ์์ฒญ์, ์๋ตํ๊ธฐ์ ์ ์คํํ  ์ฝ๋

        "homepage" :"~~" ์ถ๊ฐํ ํ 
        npm run build

        ๊ณ์ ์ค๊ฐ์ ๋ฉ์ถ๊ณ  build๋ฅผ ํด์ผํ๋๊ฐ??
        ใดใด, ๋ผ์ด๋ธ๋ก ๊ฐ๋ฅํจ
        proxy ๊ฒ์
    */





    // ๐๐c18, listen
    app.listen(process.env.PORT, function () {
        console.log((`bgBrightMagenta`).bgBrightGreen)
        console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);
        
    });

    //๐ client.close()์์ผ๋ฉด post๊ฐ ์๋จ..์์ธ์ง๋ ๋ชจ๋ฆ
    // client.close();
});





