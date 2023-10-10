const express = require('express');
const session = require('express-session');

const app = express();

// 세션 설정
const sess = {
  session: function (req, res) {
    console.log('helloworld!!!');
    app.use(
      session({
        secret: 'hellomando',
        resave: false,
        saveUninitialized: true,
      })
    );
    console.log('byeworld!!!');
  },
};

module.exports = sess;
