var mysql = require('mysql2');
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'TeamA',
  password: 'TeamA1234567@',
  database: 'kknock',
});
db.connect();

module.exports = db;
