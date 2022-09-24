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
// let ejs = require('ejs'); 👉documnet에 있는 사용법인데 아직 이해못했음
app.set('view engine','ejs')

// c50) static 파일 보관위해 public폴더 씀. html에서 경로설정할 때 root폴더에 보관된 것처럼 경로 설정함
app.use(express.static('public'))

// method-override
let methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method-Override'))








// 🍀get, post, put, delete

// 🍀get
app.get("/", function (req, res) {
  //res.send('ig node server')
  
  // html
  // res.sendFile(__dirname + "/index.html");

  //🦄c50. ejs : html과 달리 render(~) 라는거 헷갈리지 말기
  // 👉index.ejs
  res.render('index.ejs')

});

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/style.css");
});

app.get("/write", function (req, res) {
    //res.send('ig node server')
    // res.sendFile(__dirname + "/write.html");

    res.render('write.ejs')
});


// 🦄🦄c28 

let url = process.env.mongoDB_url;

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("ig-Database created!");

  let db = client.db('db0921')

  // 🍀post, bodyParser
  app.post('/add',function (req,res) {    
    // res.send('/add, 전송완료')
    // res.sendFile(__dirname + "/write.html");
    res.render('write.ejs')


    console.log('add fin')

    console.log(req.body)
    console.log(req.body.ig_title)


    // 🍀c38.findOne, total count
    db.collection('counter').findOne({name:'total post count'},function (err,pp_res) {
      console.log(pp_res)
      console.log(pp_res.totalPost)
      
        // 🍀insertOne, _id: pp_res.totalPost+1
      db.collection('co0921').insertOne({_id:pp_res.totalPost+1,title: req.body.ig_title, date:req.body.ig_data },function (){
        console.log('insertone success'.blue)      

        // 🍀c40.updateOne, $inc:{totalPost:1}
        db.collection('counter').updateOne({name:'total post count'},{$inc:{totalPost:1}},function (PPP_err,ppp_res) {
          if (PPP_err) {
            return console.log(PPP_err)            
          } 
          
        });
      })
    });

  })
  
  // list
  app.get("/list", function (req, res) {

    // find().toArray()
    db.collection('co0921').find().toArray(function (err,pp_res) {
      console.log(pp_res)
      
      // ejs
      //res.render
      res.render('list.ejs',{ig_posts:pp_res});
    })

  });


  // 🍀c42, delete
  app.delete('/delete', function (req,res) {
    
    console.log(req.body)

    req.body._id = parseInt(req.body._id);
    db.collection('co0921').deleteOne(req.body, function (pp_err, pp_res) {
         console.log('ig delete fin')

      res.status(200).send({message:"ig delete fail"});
    })
    
  });



  // 🍀c48. 👉/views/detail.ejs

  app.get('/detail/:id',function (req,res) {
    db.collection('co0921').findOne({_id: parseInt(req.params.id)},function (pp_err,p_res) {
      console.log(p_res)
      res.render('detail.ejs',{ig_data: p_res})      
    });    
  });

  // 🦄🦄c52. update.ejs, update-id.ejs
  /* 
    1 'update' - 'update-id'페이지 따로만듬
    2. app.get()도 따로 만듬
    에러없이 정상작동됨
  */
  app.get("/update", function (req, res) {
    res.render('update.ejs')
  });

  // 🍀 /update/:id
  app.get("/update/:id", function (req, res) {
    db.collection('co0921').findOne({_id: parseInt(req.params.id)},function (pp_err, p_db결과) {    
        
      console.log(p_db결과)
      res.render('update-id.ejs',{ig_post: p_db결과})      
    })
  });


  // 🦄🦄🦄c54, 👉update-id.ejs

  app.put('/update',function (req,res) {
    
    db.collection('co0921').updateOne({_id:parseInt(req.body.id)},{$set:{title: req.body.title, date: req.body.date}},function (p_err, p_res) {
      console.log('ig- update- fin')

      res.redirect('/list');
    })
  });


























  // 🍀listen
  app.listen(process.env.PORT, function () {
      console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);
  });

  // cliend.close()있으면 post가 안됨..왜인지는 모름
  // client.close();
});





