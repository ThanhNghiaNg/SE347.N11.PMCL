const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  pseudonym: {
    type: String,
  },
});

module.exports = mongoose.model("Author", authorSchema);
