const Schema = require("validate");

module.exports = new Schema({
  title: {
    type: String,
    required: true,
    length: { min: 2, max: 50 }
  },
  category: {
    type: String,
    required : true,
    length: { min: 1, max: 2 }
  },
  contetns: {
    type: String,
    length: { max: 2000 }
  },
  url_link: {
    type: String,
    length: { max: 200 }
  },
  writer: {
    type: String,
    required : true,
    length: { max: 50 }
  },
});
