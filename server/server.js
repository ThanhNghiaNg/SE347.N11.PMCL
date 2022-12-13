const express = require("express");
const server = express();
// MODEL
const sequelize = require("./utils/database");
const User = require("./models/user");
const Book = require("./models/book");
const Cart = require("./models/cart");
const Order = require("./models/order");
const Review = require("./models/review");

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Book, { through: Order });
Book.belongsToMany(Cart, { through: Order });

Order.hasOne(Review);
Review.belongsTo(Order);


const adminRoute = require("./routes/admin");
const shopRoute = require('./routes/shop')
// const userRoute = require('./routes/user')

server.use("/admin", adminRoute);
// server.use('/user', userRoute)
server.use(shopRoute)

// server.listen(5000)
Book.findAll().then((result) => {
  if (result.length <= 0) {
    fetchData();
  }
  sequelize.sync().then(() => {
    server.listen(5000);
  });
});
