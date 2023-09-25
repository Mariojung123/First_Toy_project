'use strict';

const express = require('express');
const axios = require('axios');
const router = express.Router();
const oauth = require('./router');

const ctrl = require('./home.ctrl');
const app = express();

router.get('/home', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);
router.use('/oauth', oauth);

module.exports = router;
