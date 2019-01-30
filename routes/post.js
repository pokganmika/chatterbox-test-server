const express = require('express');
const Post = require('../models/index').Post;
const router = express.Router();

router.post('/post', async (req, res, next) => {
  const { userName, text, roomId } = req.body;
  
  await Post.create({ userName, text, roomId })
  .then(() => res.status(200).json('작성 완료'))
    .catch((err) => {
      console.log(err.message)
      res.status(400).json('작성 실패')
    })

});

module.exports = router;
