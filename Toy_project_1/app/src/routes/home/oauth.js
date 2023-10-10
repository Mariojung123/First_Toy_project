const sign = require('../../../sign');
const passport = require('../../routes/home/google_session/passport');
const sess = require('../../routes/home/google_session/GoogleSession');

const axios = require('axios');

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo';

const googleLoogin = {
  Login: function (req, res) {
    sess.session(); // 세션 설정
    passport.initialize.initial(); // passport 초기화
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${sign.GOOGLE_CLIENT_ID}`;
    url += `&redirect_uri=${sign.GOOGLE_REDIRECT_URI}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    res.redirect(url);
  },

  Redirect: async function (req, res) {
    const { code } = req.query;

    const resp = await axios.post(GOOGLE_TOKEN_URL, {
      code,
      client_id: sign.GOOGLE_CLIENT_ID,
      client_secret: sign.GOOGLE_CLIENT_SECRET,
      redirectUri: sign.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });
    console.log(resp.data);

    const resp2 = await axios.get(GOOGLE_USERINFO_URL, {
      headers: {
        Authorization: `Bearer ${resp.data.access_token}`,
      },
    });
    console.log(resp2.data);
    res.json(resp2.data);
  },
};

module.exports = googleLoogin;
