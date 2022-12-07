const sequelize = require("../utils/database");
const Sequelize = require("sequelize");
const Book = sequelize.define(
  "book",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    publisher: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    images: {
      type: Sequelize.STRING(3000),
      allowNull: true,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity_sold: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING(10000),
      allowNull: true,
    },
    short_description: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    initialAutoIncrement: 10000,
  }
);

module.exports = Book;
