const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');
const config = require('./config/config');
const mysql = require('mysql');

const pool = mysql.createPool(config);
pool.getConnection(function(err, connection) {
  connection.query( 'SELECT * FROM MEMBER', function(err, rows) {
    console.log(rows);
    connection.release();
  });
});

app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));