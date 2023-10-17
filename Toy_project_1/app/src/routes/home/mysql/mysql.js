'use strict';
const express = require('express');
const router = express.Router();
const db = require('../../../../vscdb');

const mysql = {
  connection: function (req, res) {
    db.query('select * from Users', function (err, results, fields) {
      if (err) throw err;
      res.json(results);
    });
  },
};

module.exports = mysql;
