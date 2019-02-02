var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 회원 가입
router.post('/signup', (req, res, next) => {

})

// 로그인
router.post('/login', (req, res, next) => { 

})

// 로그아웃
router.get('/logout', (req, res) => { 

})

module.exports = router;
