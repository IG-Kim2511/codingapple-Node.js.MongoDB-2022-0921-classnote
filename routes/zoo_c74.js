const express = require('express')
const router = express.Router()


// ๐ฆ๐ฆc74 

// ๐74-50.๋ฏธ๋ค์จ์ด ์ ์ฉํ๊ธฐ - ๊ธฐ๋ณธ
// ~~~/zoo/lion ์ ์๋จ
function ๋ก๊ทธ์ธํ๋_middleware(req,res,next) {
    if (req.user) {
        next()        
    } else {
        res.send('not log in');        
    }    
}

router.get('/lion', ๋ก๊ทธ์ธํ๋_middleware,(req, res์๋ต) => {
    res์๋ต.send('lion home page')
})

// // ๐74-60. ์ฌ๊ธฐ์๋ ๋ชจ๋  url์ ๋ฏธ๋ค์จ์ด ์ ์ฉํ๊ธฐ
// router.use(๋ก๊ทธ์ธํ๋_middleware);


// ๐74-70. ํน์  url์๋ง ์ ์ฉํจ
// ~~~/zoo/dog ์ ์๋จ
router.use('/dog',๋ก๊ทธ์ธํ๋_middleware);
  
router.get('/dog', (req, res์๋ต) => {
    res์๋ต.send('About dog')
})
  
  

module.exports = router