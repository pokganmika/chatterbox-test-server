const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postRouter = require('./routes/post');
const roomRouter = require('./routes/room');
const sequelize = require('./models').sequelize;

const app = express();
sequelize.sync();
// sequelize.sync({force: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/post', postRouter);
app.use('/api/room', roomRouter);

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

module.exports = app;
