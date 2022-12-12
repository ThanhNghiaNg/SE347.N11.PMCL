const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: true
    },
    sex: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
  },
  {
    initialAutoIncrement: 10000,
  }
);

module.exports = User;
