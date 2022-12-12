const sequelize = require("../utils/database");
const Sequelize = require("sequelize");

const Review = sequelize.define(
  "review",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: true,
    },
    images: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
  },
  {
    initialAutoIncrement: 10000,
  }
);

module.exports = Review
