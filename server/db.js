const mysql = require("mysql");
const config = require("./config/config");

const pool = mysql.createPool(config);
console.log('Connection pool created.');

const getConn = function(callback) {
  pool.getConnection(function(err, connection) {
    callback(err, connection);
  });
}

module.exports = getConn;