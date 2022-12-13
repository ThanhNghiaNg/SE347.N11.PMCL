const Book = require("../models/book");
const User = require("../models/user");

exports.fetchAllBooks = (req, res, next) => {
  Book.find().then((books) => {
    res.send({ data: books });
  });
};

exports.postAddToCart = (req, res, next) => {
  const bookId = req.body.bookId;
  const quantity = req.body.quantity;

  // .then?ok?
  req.session.user.addToCart(bookId, quantity);
  res.send({ message: "Added Book To Cart" });
};

exports.getCart = (req, res, next) => {
  req.session.user.populate("cart.items.bookId").then((result) => {
    return res.send({ cart: result.cart.items });
  });
};

exports.postOrder = (req, res, next) => {};

exports.getOrder = (req, res, next) => {};
