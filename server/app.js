const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');
const logger = require('./logger')

app.use(bodyParser.json());
app.use('/api', api);

// error handler
app.use(function (err, req, res, next) {
  logger.error('Error handler : ', err);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => logger.info(`Listening on port ${port}...`));