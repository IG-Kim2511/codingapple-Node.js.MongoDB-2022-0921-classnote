

/* 
  🦄🦄🦄ig 정리 : 자주쓰는 node.js, mongoDB 문법


  🍀
  app.get("/", function (req요청, res응답) {
    res응답.render('index.ejs')
    res.sendFile(__dirname + "/style.css");
  })

  app.post('/add',function (req,res) {   })

  app.delete('/delete',function (req,res) {   })

  app.put('/update',function (req,res) {   })

  🍀
    res.redirect('/list');

  🍀
    req.body.~

  🍀
  .insertOne({},function (err,res) {})
  .updateOne({},function (err,res) {})
  .deleteOne({},function (err,res) {})

  🍀
  .findOne({},function (err,res) {})
  .find({title:req.query.value}).toArray((err,db결과)=>{ })

*/

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
app.use(methodOverride('_method'))

      

    

// 🍀route : get, post, put, delete

// 🍀get
app.get("/", function (req요청, res응답) {
  //res.send('ig node server')
  
  // html
  // res.sendFile(__dirname + "/index.html");

  //🦄c50. ejs : html과 달리 render(~) 라는거 헷갈리지 말기
  // 👉index.ejs
  res응답.render('index.ejs')

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
  // 👉write.ejs
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

  app.put('/update-id',function (req,res) {

    console.log(res.body)

    db.collection('co0921').updateOne({_id:parseInt(req.body.ig_id)},{$set:{title: req.body.ig_title, date: req.body.ig_date}},function (p_err, p_res) {
      console.log('ig- update- fin')

      // 🍀redirect
      // res.render('list.ejs'); 로 하면 에러남 (왜인지는 모름)
      res.redirect('/list');
    })
  });


  // 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
  // 🦄🦄🦄🦄🦄🦄🦄🦄여기부터 필기노트 옮김🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
  console.log('🦄🦄여기부터 필기노트 옮김')


  // 🦄🦄c56 (회원 로그인0) 세션, JWT, OAuth 등 회원인증 방법 이해하기
  // 🦄🦄c58 (회원 로그인1) 미들웨어, app.use(~), passport, express-session, passport.authenticate(~), passport.use(new LocalStorategy(~))
  // 🦄🦄c60 (회원 로그인2) passport-local, passport.serializeUser(~), bcryptjs
  // 🦄🦄c62 (회원 로그인3) mypage.ejs, middleware로그인확인, passport.deserializeUser, req.user: db의 데이터
  // 👉mypage.ejs

  console.log('🦄🦄c56,58,60,62')

  // 👉login_c58.ejs


  // 🍀c58-10)
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


  // 🍀passport
  /*🍀-20)
    passport.authenticate('local') : (인증해주세요)함수 ,    
    인증 실패시 (failureRedirect : '/fail') :  '/login_fail' 로 연결 
    인증 성공시 : res응답.redirect('/') 
  */
  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login_fail' }),
    function(req, res) {
      console.log('🦄c58. login')
      res.redirect('/');
    });


  // 🍀passport-local
  // 🍀c60-30) passport.authenticate('local',~)...로그인 성공시, 다음코드 실행됨
  passport.use(new LocalStrategy(
    {
    usernameField:'id',             // 👉login_c58.ejs
    passwordField:'pw',            // 👉login_c58.ejs
    session: true,                       // login 후 session을 저장할것인지?
    passReqToCallback:false,
    },
    function(입력한username, 입력한password, done) {
      db.collection('login').findOne({ id: 입력한username }, function (err, user정보) {

        console.log(colors.bgYellow('passport.use(new LocalStrategy'))            
        console.log(입력한username,입력한password)
        console.log(user정보)

        /*-40)
          error처리
          DB에 ID가 없을때
          DB에 ID가 있을때
          DB에 ID가 있으면, input password == DB password 비교함

          -50)
          done: 3개의 argument를 가짐
          done(서버에러, 성공시 사용자 db데이터, 에러 메시지)

          -60)        
          입력한 비밀번호를 암호화한 후 ,DB의 비밀번호와 비교해야함 (나중에 알아서 하세요)
        */

        if (err) { return done(err); }
        if (!user정보) { return done(null, false,{message:'존재하지않는 아이디입니다'}); }
        if (입력한password !== user정보.pw) { 
          return done(null, false,{message: '비번 틀림'});
        }
        return done(null, user정보,{message:'성공'});

      });
    }
  ));

  // 🍀passport.serializeUser
  // login 성공 때, id를 이용해서 session을 local에(?) 저장 (session의 id정보를 cookie로 보냄)
  // 👉f12 -> Application -> Cookies에서 확인
  passport.serializeUser(function(user정보, done) {
    console.log(colors.bgYellow('passport.serializeUser'))
    console.log(user정보)

    done(null, user정보.id);
  });


  // 🦄c62,  👉mypage.ejs
  // 🍀 passport.deserializeUser
  // login 성공 때, 위의 session데이터를 가진사람(login한 유저)의 정보를 db에서 찾아줌
  // user정보 : db에서 찾은 정보
  // p_id : passport.serializeUser에서의 use정보.id
  passport.deserializeUser(function(p_id, done) {
    db.collection('login').findOne({id:p_id}, function (err, user정보) {
      done(err, user정보);
    });
  });

  // 🍀62-50. app.get("/mypage",~~~~), 
  // 🍉req.user : db의 데이터
  app.get("/mypage",middleware로그인확인, function (req, res) {
    console.log(colors.bgBrightYellow(`/mypage : req.user`))
    console.log(req.user)
    res.render('mypage_62.ejs',{ig_mypage유저정보: req.user})
  });

  //🥒62-50. middleware로그인확인
  // req.user가 있으면 next() : 통과  👉app.get("/mypage",~~~~실행
  // req.user가 없으면 res.render(~~)  (html에 메시지 띄움)
  function middleware로그인확인(req,res,next) {
    if (req.user) {
      console.log(colors.bgBrightGreen('middleware로그인확인'))
      next()    
    } else {
      // res.send('로그인 안했습니다.');    
      res.render('login_fail.ejs')    
    }  
  }



  // 🦄🦄c64 .env 파일, environment variable, 가변적인 변수 데이터들 관리하기 
  // 👉.env  
  console.log('🦄🦄c64 ')


  /* 
    🍀 npm install dotenv

    🍀 👉상단코드 : 
      root folder에 .env파일 만들때 : require('dotenv').config()
      다른 folder(env_c64)에 .env파일 만들때 : require('dotenv').config({path: "./env_c64/.env"})
    
    🍀 server.js와 같은 폴더에 '.env'파일 만듬
    👉.env  
  */


  //🦄🦄c66 검색기능1 Query string parameters, ('/search?value='+입력한value), req.query.value, window.location.replace('/~')
  // 👉views/list.ejs : html, javascript 
  


  /* 
    🍀c66) Query string parameters : 
    b 검색하면 url뒤로 몰래 정보를 전달함
    ? ~~a~~ = ~~b~~

    🍀c66-20) server.js에서 query string꺼내씀, DB에서 데이터 꺼냄. 

    -a) req요청.query : get함수에서 요청.body 쓰는것과 비슷하게 사용하는 방식임

    -b)
      collection().findOne()           : 1개 찾을 때
      collection().find().toArray()     : 여러개 찾을 때
    */
  app.get('/search_c68',(req,res)=>{
    
    // 🥒req.query 
    console.log(req.query)
    console.log(req.query.value)

     // 🥒 collection().find().toArray()  
    // find({제목:req요청.query.value})  👉 문제점: 정확히 일치하는 것만 찾아줌
    db.collection('co0921').find({title:req.query.value}).toArray((p_err,p_db결과)=>{
      
      console.log(colors.bgBrightMagenta('get./search_c68'))
      console.log(p_db결과)

  
      //🦄🦄c68 검색기능2 mongoDB사이트...index탭, Binary Search, 
      // 👉views/👉search_c68.ejs

      /*
        🍀-30) 👉mongoDB사이트  collection 👉 index
        가나다라 정렬
        오름차순, 내림차순
        동시에 여러개 설정가능함      
      */

      res.render('search_c68.ejs',{ig_posts:p_db결과});

    })
  });
   

  //🦄🦄c70 검색기능3 mongoDB사이트...search index탭, $.parma(~), $("#form").serialize(~), aggregate(~), $search, $sort,$limit, $project, {$meta:"searchScore"}
  // 👉mongoDB사이트  collection 👉 index
  // 👉 mongoDB사이트...search index탭 활용함

  /* 
    🍀70-2) me: okky처럼 구글로 검색이동시키는 방법도 있음, 
  */


    app.get('/search_c70',(req요청,res응답)=>{

      console.log(colors.bgBrightMagenta('get./search_c70'))
      console.log(req요청.query.value)

      //  🍀70-15) .find(검색조건).toArray()
      // 👉mongoDB사이트  collection 👉 index
      // {title:req요청.query.value} : full scan하는 이전 방법      
      /*      
        db.collection('co0921').find({title:req요청.query.value}).toArray((P_err,p_db)=>{
          console.log(p_db)
          res응답.render('search_c70.ejs',{ig_posts:p_db});
        }); 
      */


      // 🍀실패함 {$text:{ $search: req요청.query.value}}
      /*  
        db.collection('co0921').find({$text:{ $search: req요청.query.value}}).toArray((P_err,p_db)=>{
          console.log(p_db)
          res응답.render('search_c70.ejs',{ig_posts:p_db});
        }); 
      */


      
      //  🍀70-20) .aggregate(검색조건).toArray()  
      // 👉 mongoDB사이트...search index탭 활용함      
      /* 
        🍀70-30)
          $sort : 
          결과정렬
          _id 순으로 정렬
          1, -1 :  오름차순, 내림차순 정렬

          $limit :
          상위 10개만 가져와주세요...라는 limit

          $project : 검색결과에서 원하는것만 보여줌
          1 : 검색결과 나옴
          0 : 검색결과 나오지 않음
          항목에 넣지않아도, 검색결과 나오지 않는걸..로 알고있음

          searchScore:  검색어와 게시물의 관련석이 높은것, 검색 많이 하는 항목은 score가 높아짐

          score는 collection에 없어도 이런식으로 코딩하면 , 
          검색결과필터링으로 넣어줌      
      */

      let 검색조건 =[
        {
          $search:{
            index : "ig_titleSearch",
            text:{
              query: req요청.query.value,
              path: ["title",'date']        //db안의 오브젝트 이름
            }  
          }
        },
        // 70-30)$sort, $limit,$project
        {$sort :{_id :1}},
        {$limit : 10},
        {$project : {title : 1, date:1, _id: 0, score :{$meta : "searchScore"}}}
      ];
      db.collection('co0921').aggregate(검색조건).toArray((err,p_db결과)=>{
        console.log(p_db결과)  
  
        res응답.render('search_c70.ejs',{ig_posts:p_db결과});
      })       
    });


    //🦄🦄 72 회원 기능...게시판 기능, req.body._id, req.user._id 
    // 👉./views/register_c72.ejs
    // 👉./views/list.ejs
    
    console.log('🦄🦄c72 ')
    /*
      🍀(나중에 알아서 추가)
        🍉id중복검사하고 저장하기 
        🍉id에 알파벳, 숫자 잘 들어있나 검사하고 저장하기 
        🍉비번 저장전에 암호화했나     

        🍀
        아이디 park으로, 아이디kim으로 아까 저장한 게시물 삭제해보기
        👉ui로는 삭제되는데, 새로고침해보면 삭제안되고 그대로인걸 확인할 수 있음
    */

    app.get('/register_c72', (req요청,res응답)=>{
      res응답.render('register_c72.ejs')

    });
    
    //🍀register post하기 : passport~~~ 코드 밑에 코딩해야함
    app.post('/register_post', (req요청,res응답)=>{
      
      console.log(colors.bgBrightMagenta('register_post'))
      console.log(req요청.body.id)

      // 🍉insertOne({id:req요청.body.id, pw:req요청.body.pw}, : post로 넘어온 req요청.body.~ 데이터 저장
      db.collection('login').insertOne({id:req요청.body.id, pw:req요청.body.pw},function (p_err,p_db) {

        // 🍉redirect
        res응답.redirect('/');         
      })
    });


    // 🍀write할때, 로그인 한 작성자도 추가하기 : passport~~~ 코드 밑에 코딩해야함
    // 👉register_c72.ejs
    app.post('/add_c72',function (req요청,res) {    
      
      console.log((`app.post('/add_c72'`).bgBrightMagenta)  
      console.log(req요청.body)
      console.log(req요청.body.ig_title)

      res.render('register_c72.ejs')


      /* 
        🍀작성자: req요청.user._id        
          req요청.user._id : 현재 로그인한 사람의 정보
          req요청.user.pw  : 현재 로그인한 사람의 password
      */
      let 저장할것 = {작성자: req요청.user._id , title: req요청.body.ig_title, date:req요청.body.ig_data}

      db.collection('co0921').insertOne(저장할것,function (p_err, p_db결과) {

        console.log('co0921-saved')        
      })      
    })

    
    // 🍀delete, 실제 로그인 한 _id == 글에 저장된 _id 같을때만 삭제하기 : passport~~~ 코드 밑에 코딩해야함
    // 👉./views/list.ejs

    /* 
      🍉아이디 park으로, 아이디kim으로 아까 저장한 게시물 삭제해보기
      👉일단 화면에서 삭제되는데, 새로고침해보면 삭제안되고 그대로인걸 확인할 수 있음
    */

      app.delete('/delete_c72', function (req,res) {
        
        console.log(req.body)

        req.body._id = parseInt(req.body._id);

        // 🍉{_id:req.body._id, 작성자:req.user._id} 둘다 만족하는 게시물을 찾아서 delete해줌
        let 삭제할데이터 = {_id:req.body._id, 작성자:req.user._id}

        //🍉기존 c41에서의 코드와의 차이점 :  db.collection('co0921').deleteOne(req.body, function (pp_err, pp_res) {
        db.collection('co0921').deleteOne(삭제할데이터, function (pp_err, pp_res) {
            console.log('ig delete fin')

          res.status(200).send({message:"ig delete fail"});
        })        
      });











    // 🍀listen
    app.listen(process.env.PORT, function () {
        console.log((`bgBrightMagenta`).bgBrightMagenta)
        console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);
        
    });

    // cliend.close()있으면 post가 안됨..왜인지는 모름
    // client.close();
});





