'use strict';

require('dotenv').config();

const sign = {
  GOOGLE_CLIENT_ID: process.env.CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.CLIENT_SECRET,
  GOOGLE_REDIRECT_URI: process.env.CLIENT_REDIRECT_URL,
};

module.exports = sign;
