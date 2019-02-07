const express = require('express');
const User = require('../models').User;
const bcrypt = require('bcrypt');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.json('이것은 json')
});

// 회원 가입
router.post('/signup', async (req, res, next) => {
  const { usersId, password } = req.body;
  
  const signedUser = await User.find({ where: { usersId } });
  if (signedUser) { 
    res.flash('signup error', '이미 사용 중인 아이디입니다.')
    res.json('이미 사용 중인 아이디입니다.')
  }

  const hash = await bcrypt.hash(password, 12);
  await User.create({
    usersId, password: hash
  })
    .then(() => res.status(200).json('가입 완료'))
    .catch(err => { 
      console.log(err.message)
      res.status(400).json('가입 실피')
    })
  
})

// 로그인
router.post('/login', (req, res, next) => { 

})

// 로그아웃
router.get('/logout', (req, res) => { 

})

module.exports = router;
