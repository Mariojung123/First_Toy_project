const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();

const initialize = {
  initial: function (req, res) {
    app.use(passport.initialize());
    app.use(passport.session());
  },
};

const sess_load = {
  sess_down: function (req, res) {
    // 사용자 세션 저장
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    console.log('session downloaded!!!');
  },

  sess_load: function (req, res) {
    // 사용자 세션에서 정보 가져오기
    passport.deserializeUser((user, done) => {
      done(null, user);
    });
    console.log('session loaded!!!');
  },
};

module.exports = {
  initialize,
  sess_load,
};
