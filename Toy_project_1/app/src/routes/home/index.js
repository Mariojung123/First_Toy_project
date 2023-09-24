'use strict';

const express = require('express');
const axios = require('axios');
const router = express.Router();

const ctrl = require('./home.ctrl');
const app = express();

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router;
