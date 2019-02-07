const express = require('express');
const Post = require('../models/index').Post;
const router = express.Router();

router.get('/', async (req, res, next) => { 
  const data = await Post.findAll();
  res.send(data);
  // res.json('도와줘요 json');
})

router.post('/', async (req, res, next) => {
  const { userName, text, roomId/*, userId*/ } = req.body;
  
  // const data = Post.findAll();
  await Post.create({ userName, text, roomId/*, userId*/ })
  // .then(() => res.status(200).send(data).json('작성 완료'))
  .then(() => res.status(200).json('작성 완료'))
    .catch((err) => {
      console.log(err.message)
      res.status(400).json('작성 실패')
    })

});

module.exports = router;
