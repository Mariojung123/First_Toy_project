'use strict';

const express = require('express');
const axios = require('axios');
const router = express.Router();
const oauth = require('./router');
const google = require('../../routes/home/oauth');
const db = require('../../../vscdb');

const ctrl = require('./home.ctrl');
const app = express();

router.get('/', ctrl.output.home);
router.use('/login', ctrl.output.login);
router.use('/map', ctrl.output.map);
router.use('/map_test', ctrl.output.map_test);
router.use('/oauth', oauth);

router.get('/users', function (req, res, next) {
  //mysql 연동하는 과정인데 에러 뱉음
  db.query('select * from Users', function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
