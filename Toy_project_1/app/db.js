var mysql = require('mysql2');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'TeamA',
  password: 'TeamA1234567@',
  database: 'kknock',
});
db.connect();

module.exports = db;
