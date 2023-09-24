'use strict';

//모듈
const sign = require('./sign');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//라우팅
const home = require('./src/routes/home');

//세션 유지
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport 초기화 및 세션 사용 설정
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth 설정
passport.use(
  new GoogleStrategy(
    {
      clientID: sign.GOOGLE_CLIENT_ID,
      clientSecret: sign.GOOGLE_CLIENT_SECRET,
      callbackURL: sign.GOOGLE_REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
      // 사용자 정보 처리 및 로그인 처리
      // 여기에서 사용자 정보를 데이터베이스에 저장하거나 기타 작업을 수행할 수 있습니다.
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // 사용자를 세션에 저장
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // 세션에서 사용자 정보 가져오기
  done(null, user);
});

// 로그인 라우트
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  })
);

// Google OAuth 콜백 라우트
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // 로그인 성공 시 리다이렉션
    res.redirect('/dashboard');
  }
);

// 로그아웃 라우트
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// 사용자 정보 라우트
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}!`);
  } else {
    res.redirect('/');
  }
});

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
