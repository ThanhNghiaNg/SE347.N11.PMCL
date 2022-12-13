const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  birthday: {
    type: Date,
    require: true,
  },
  sex: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);

// const Sequelize = require("sequelize");
// const sequelize = require("../utils/database");

// const User = sequelize.define(
//   "user",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     username: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     address: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     birthday: {
//         type: Sequelize.DATE,
//         allowNull: true
//     },
//     sex: {
//         type: Sequelize.CHAR,
//         allowNull: false
//     },
//     country: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//   },
//   {
//     initialAutoIncrement: 10000,
//   }
// );

// module.exports = User;
