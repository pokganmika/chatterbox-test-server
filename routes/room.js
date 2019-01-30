const express = require('express');
const Room = require('../models/index').Room;
const router = express.Router();

router.post('/room', async (req, res, next) => {
  const { roomName } = req.body;
  
  await Room.create({ roomName })
  .then(() => res.status(200).json('방 생성 완료'))
  .catch((err) => {
    console.log(err.message)
    res.status(400).json('방 생성 실패')
  })

});

module.exports = router;
