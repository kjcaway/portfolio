const multer = require('multer');
const moment = require('moment');
const config = require('../config/config');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, config.file.uploadPath);
  },
  filename: function(req, file, cb) {
    cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage }).single("file");

module.exports = upload;