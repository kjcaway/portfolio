const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');
const logger = require('./logger')

app.use(bodyParser.json());
app.use('/api', api);

// set the secret key variable for jwt

// error handler
app.use(function (err, req, res, next) {
  logger.error(`${err}`);
  return res.status(500).json({error: 1, message:'Internal Server Error.'});
});

const port = process.env.PORT || 3001;
app.listen(port, () => logger.info(`Listening on port ${port}...`));