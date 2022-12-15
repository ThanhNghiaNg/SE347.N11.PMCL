const Book = require("../models/book");
const Order = require("../models/order");

// fetch all book from database
exports.fetchAllBooks = (req, res, next) => {
  Book.find().then((books) => {
    res.send({ data: books });
  });
};

// fecth book by Id, get from url's params
exports.fetchBookById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  return Book.find({ _id: id }).then((books) => {
    console.log(books[0]);
    return res.send(books[0]);
  });
};

// add book to cart by Id
exports.postAddToCart = (req, res, next) => {
  const bookId = req.body.bookId;
  const quantity = req.body.quantity;
  console.log(bookId, quantity);
  // .then?ok?
  req.session.user.addToCart(bookId, quantity).then(() => {
    return res.send({ message: "Added Book To Cart" });
  });
};

exports.getCart = (req, res, next) => {
  req.session.user.populate("cart.items.bookId").then((result) => {
    return res.send(result.cart.items);
  });
};

exports.postUpdateCartAmount = (req, res, next) => {
  const bookId = req.body.bookId;
  const quantity = req.body.quantity;
  const bookIdx = req.session.user.cart.items.findIndex(
    (book) => book.bookId.toString() === bookId
  );
  if (bookIdx >= 0) {
    req.session.user.cart.items[bookIdx] = quantity;
    return req.session.user.save((err) => {
      return res.send({ message: "Updated Quantity" });
    });
  }
  res.status(405).send({ message: "Failed to Update" });
};

exports.postOrder = (req, res, next) => {
  if (req.session.user.cart.items.length > 0) {
    const price = req.session.user.cart.items.reduce(
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

exports.getOrder = (req, res, next) => {
  Order.find({ user: req.session.user._id })
    .populate("user", "-password")
    .populate("books.bookId")
    .then((order) => {
      return res.send(order);
    });
};

exports.postUpdateOrder = (req, res, next) => {};
