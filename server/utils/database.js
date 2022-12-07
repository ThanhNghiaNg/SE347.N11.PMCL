const Sequelize = require("sequelize");
const sequelize = new Sequelize("bookstoredb", "root", "Nghia089001", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
