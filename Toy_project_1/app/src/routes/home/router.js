const express = require('express');

const Login = require('./oauth');

const router = express.Router();

router.use('/login', Login.Login);
router.use('/redirect', Login.Redirect);
// router.use('/map');

module.exports = router;
