const mysql = require('mysql');

const db = mysql.createConnection({
  //아래 코드가 기존 코드이고 이거는 잠깐 실험해볼라고 적어놓은 코드임
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login',
});

module.exports = db;
// const dbInfo = {
//   host: 'localhost',
//   user: 'root',
//   password: '1410bbcc??',
//   database: 'login',
// };

// module.exports = {
//   init: function () {
//     return mysql.createConnection(dbInfo);
//   },
//   connect: function (conn) {
//     conn.connect(function (err) {
//       if (err) console.error('mysql 연결 에러 : ' + err);
//       else console.log('mysql 연결 성공');
//     });
//   },
// };
