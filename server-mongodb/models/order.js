const sequelize = require("../utils/database");
const Sequelize = require("sequelize");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  detail: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},{
    initialAutoIncrement: 10000
});

module.exports = Order;
