const sequelize = require("../utils/database");
const Sequelize = require("sequelize");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
},{
    initialAutoIncrement: 10000
});

module.exports = Cart;
