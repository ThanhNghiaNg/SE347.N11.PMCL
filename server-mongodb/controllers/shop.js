const Book = require("../models/book");
const Order = require("../models/order");

exports.fetchAllBooks = (req, res, next) => {
  Book.find().then((books) => {
    res.send({ data: books });
  });
};

exports.fetchBookById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  return Book.find({ _id: id }).then((books) => {
    console.log(books[0]);
    return res.send(books[0]);
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

exports.postOrder = (req, res, next) => {
  if (req.session.user.cart.items.length > 0) {
    const price = req.session.user.cart.items.reducer(
      (book, acc) => acc + book.price
    );

    const order = new Order({
      books: [...req.session.user.cart.items],
      status: { status: "Accepted", detail: "", date: new Date() },
      user: req.session.user._id,
      price: price,
    });

    order.save((err) => {
      console.log(err);
      req.session.user.resetCart();
      return res.send({ message: "Order Successfully!" });
    });
  } else {
    res.status(405).send({ message: "Cart is empty!" });
  }
};

exports.getOrder = (req, res, next) => {};

exports.postUpdateOrder = (req, res, next) => {};
