const Book = require("../models/book");
const Order = require("../models/order");
const Review = require("../models/review");

// fetch all book from database
exports.fetchAllBooks = (req, res, next) => {
  Book.find().then((books) => {
    res.send({ data: books });
  });
};

// fecth book by Id, get from url's params
exports.fetchBookById = (req, res, next) => {
  const id = req.params.id;
  return Book.find({ _id: id }).then((books) => {
    return res.send(books[0]);
  });
};

// add book to cart by Id
exports.postAddToCart = (req, res, next) => {
  const bookId = req.body.bookId;
  const quantity = req.body.quantity;
  // .then?ok? oked.
  req.session.user.addToCart(bookId, quantity).then(() => {
    return res.send({
      message: "Added Book To Cart",
      cart: req.session.user.cart,
    });
  });
};

exports.getCart = (req, res, next) => {
  req.session.user.populate("cart.items.bookId").then((result) => {
    // const data = {cart:result.cart.items, email: result.email, id: result._id}
    return res.status(200).send(result);
  });
};

exports.postUpdateCartAmount = (req, res, next) => {
  const bookId = req.body.bookId;
  const quantity = req.body.quantity;
  const bookIdx = req.session.user.cart.items.findIndex(
    (book) => book.bookId.toString() === bookId
  );
  if (bookIdx >= 0) {
    req.session.user.cart.items[bookIdx].quantity = quantity;
    return req.session.user.save((err) => {
      return res.send({ message: "Updated Quantity" });
    });
  }
  res.status(405).send({ message: "Failed to Update" });
};

exports.postDeleteCartItem = (req, res, next) => {
  const bookId = req.body.bookId;
  const cartItemsUpdated = req.session.user.cart.items.filter(
    (book) => book.bookId.toString() !== bookId
  );
  req.session.user.cart.items = [...cartItemsUpdated];
  return req.session.user.save().then((result) => {
    return res.send({
      message: "Deleted product from cart!",
      cart: req.session.user.cart,
    });
  });
};

exports.postOrder = (req, res, next) => {
  const deliveryService = req.body.deliveryService;
  const paymentMethod = req.body.paymentMethod;
  if (req.session.user.cart.items.length > 0) {
    req.session.user.populate("cart.items.bookId").then((result) => {
      let totalPrice = 0;
      result.cart.items.forEach((book) => {
        totalPrice += book.bookId.price * book.quantity;
      });

      const itemsOrder = req.session.user.cart.items.map((book) => {
        return { ...book, reviewed: false };
      });
      const order = new Order({
        books: [...itemsOrder],
        status: { status: "paying", detail: "", date: new Date() },
        payment: {
          deliveryService: deliveryService,
          paymentMethod: paymentMethod,
        },
        user: req.session.user._id,
        totalPrice: totalPrice,
      });

      order.save((err) => {
        console.log(err);
        req.session.user.resetCart();
        return res.send({
          message: "Order Successfully!",
        });
      });
    });
  } else {
    res.status(405).send({ message: "Cart is empty!" });
  }
};

exports.getOrders = (req, res, next) => {
  Order.find({ user: req.session.user._id })
    .populate("user", "-password")
    .populate("books.bookId")
    .then((orders) => {
      return res.send(orders);
    });
};

exports.postUpdateOrder = (req, res, next) => {};

exports.getReviews = (req, res, next) => {
  const bookId = req.params.id;
  console.log(bookId);
  Review.find({ book: bookId })
    .populate("user", "name")
    .then((reviews) => {
      return res.send(reviews);
    });
};
