'use strict';

const express = require('express');
const router = express.Router();
const loginRouter = require('./google_route/router');
const ctrl = require('./home.ctrl');
const mysql = require('../home/mysql/mysql');

router.get('/home', ctrl.output.home);
router.use('/login', ctrl.output.login);
router.use('/map', ctrl.output.map);
router.use('/map_test', ctrl.output.map_test);
router.use('/oauth', loginRouter);
router.use('/user', mysql.connection);

module.exports = router;
