const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
  rate: { type: String, require: true },
  content: { type: String, require: true },
  book: { type: Schema.Types.ObjectId, require: true, ref: "Book" },
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
});

module.exports = mongoose.model("Review", reviewSchema);
