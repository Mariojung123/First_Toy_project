'use strict';

const UserStorage = require('../../model/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  map: (req, res) => {
    //map.ejs로 가기 위한 변경사항
    res.render('home/map');
  },
  map_test: (req, res) => {
    res.render('home/map_test');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const users = UserStorage.getUsers('id', 'psword');

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = '로그인에 실패하셨습니다.';
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

// {key:key}{
//     hello:hello,
//     login:login,
// };
