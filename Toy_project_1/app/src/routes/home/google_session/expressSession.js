const session = require('express-session');
const express = require('express');

// Express 애플리케이션과 세션 설정 가져오기
const app = express();
app.use(
  session({
    secret: 'mario', // 세션 암호화를 위한 비밀키
    resave: false,
    saveUninitialized: true,
  })
);

module.exports = app;
