const express = require('express');
const router = express.Router();
const db = require('../mysql/vscdb'); // MySQL 연결 모듈
const bcrypt = require('bcrypt'); // 비밀번호 해싱 라이브러리

const login_check = {
  login_checking: function (req, res) {
    router.post('/login', (req, res) => {
      const { login_id, login_pw } = req.body;
    }),
      (query = 'SELECT * FROM user_login WHERE login_id = ?');

    db.query(query, [login_id], (err, results) => {
      if (err) {
        console.error('MySQL 쿼리 오류:', err);
        res.status(500).json({ error: '서버 오류' });
        return;
      }
      if (results.length === 0) {
        res.status(401).json({ error: '사용자를 찾을 수 없습니다.' });
        return;
      }
      const user = results[0];

      if (login_pw === user.login_pw) {
        // 로그인 성공
        res.status(200).json({ message: '로그인 성공' });
      } else {
        // 로그인 실패
        res.status(401).json({ error: '비밀번호가 일치하지 않습니다.' });
      }
    });
  },
};
module.exports = login_check;
