const Schema = require("validate");

module.exports = new Schema({
  id: {
    type: String,
    required: true,
    length: { min: 2, max: 50 }
  },
  name: {
    type: String,
    required : true,
    length: { min: 1, max: 20 }
  },
  type: {
    type: String,
    required : true,
    length: { max: 2 }
  },
  password: {
    type: String,
    required : true,
    length: { min: 1, max: 200 }
  },
  email: {
    type: String,
    length: { max: 50 }
  },
});
