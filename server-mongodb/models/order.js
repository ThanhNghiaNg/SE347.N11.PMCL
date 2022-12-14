const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  books: [
    {
      bookId: { type: Schema.Types.ObjectId, require: true, ref: "Book" },
      quantity: { type: Number, require: true },
    },
  ],
  status: {
    status: {
      type: String,
      require: true,
    },
    detail: {
      type: String,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  totalPrice: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
// const sequelize = require("../utils/database");
// const Sequelize = require("sequelize");

// const Order = sequelize.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   status: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   detail: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   date: {
//     type: Sequelize.DATE,
//     allowNull: true,
//   },
//   amount: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
// },{
//     initialAutoIncrement: 10000
// });

// module.exports = Order;
