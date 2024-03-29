const User = require("../models/user");
const Review = require("../models/review");
const Order = require("../models/order");
const Book = require("../models/book");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const sleep = require("../utils/global").sleep;

exports.getUpdate = (req, res, next) => {
  User.findOne({ _id: req.session.user._id }).then((user) => {
    return res.send({
      address: user.address ? user.address : "",
      email: user.email ? user.email : "",
      name: user.name ? user.name : "",
      phone: user.phone ? user.phone : "",
      birthday: user.birthday ? user.birthday : "",
      sex: user.sex ? user.sex : "",
      country: user.country ? user.country : "",
    });
  });
};

exports.postChangePassword = (req, res, next) => {
  const { password, newPassowrd } = req.body;
  bcrypt.compare(password, req.session.user.password).then((doMatched) => {
    if (doMatched) {
      return bcrypt.hash(newPassowrd, 12).then((hashPassword) => {
        req.session.user.password = hashPassword;
        return req.session.user.save().then((err) => {
          res.status(200).send({ message: "Changed Password!" });
        });
      });
    } else {
      return res.status(401).send({ message: "Password is not correct!" });
    }
  });
};

exports.postUpdate = (req, res, next) => {
  updatedAddress = req.body.address;
  updatedName = req.body.name;
  updatedEmail = req.body.email;
  updatedPhone = req.body.phone;
  updatedBirthday = req.body.birthday;
  updatedSex = req.body.sex;
  updatedCountry = req.body.country;

  req.session.user.address = updatedAddress;
  req.session.user.name = updatedName;
  req.session.user.email = updatedEmail;
  req.session.user.phone = updatedPhone;
  req.session.user.birthday = updatedBirthday;
  req.session.user.sex = updatedSex;
  req.session.user.country = updatedCountry;

  req.session.user.save((err) => {
    console.log(err);
    return res.send({ message: "Updated!" });
  });
};

exports.getReviewBook = (req, res, next) => {
  Order.find({
    user: req.session.user._id,
    "status.status": "shipped",
  })
    .populate("books.bookId", "-description -short_description")
    .then((result) => {
      const booksReview = [];
      result.forEach((order) => {
        order.books.forEach((book) => {
          if (!book.reviewed) {
            booksReview.push({
              _id: book.bookId._id,
              title: book.bookId.title,
              images: book.bookId.images,
              orderId: order._id,
            });
          }
        });
      });
      return res.send(booksReview);
    });
};

exports.getReviewedBook = (req, res, next) => {
  Review.find({ user: req.session.user._id })
    .populate("book")
    .then((reviews) => {
      return res.send(reviews);
    });
};

exports.postReviewBook = (req, res, next) => {
  const rate = req.body.rate;
  const content = req.body.content;
  const bookId = req.body.bookId;
  const orderId = req.body.orderId;

  const review = new Review({
    rate,
    content,
    book: bookId,
    user: req.session.user._id,
  });
  // Tạo và lưu review vào database
  return review.save().then((result) => {
    // Tìm order và sản phẩm tương ứng, đánh dấu đã review (true)
    Order.findOne({ _id: orderId }).then((order) => {
      const idxBookReviewed = order.books.findIndex(
        (book) => book.bookId._id.toString() === bookId
      );
      order.books[idxBookReviewed].reviewed = true;
      return order.save().then(() => {
        // Tìm sách vừa được đánh giá, cập nhật lại rate
        return Review.find({ book: bookId }).then((result) => {
          const avgRate =
            result.reduce((acc, review) => acc + Number(review.rate), 0) /
            result.length;
          return Book.findOne({ _id: bookId }).then((book) => {
            book.rate = Math.round(avgRate * 10) / 10;
            return book.save().then(() => {
              return res.send({ message: "Added Review." });
            });
          });
        });
      });
    });
  });
};

// Get all order that user ordered
exports.getOrdered = (req, res, next) => {
  Order.find({ user: req.session.user._id })
    .populate("books.bookId")
    .then((orders) => {
      return res.send(orders);
    });
};

// Get all order that user ordered and user information
exports.getOrderByID = (req, res, next) => {
  const orderId = req.params.id;
  Order.findOne({ _id: orderId })
    .populate("books.bookId")
    .populate("user", "-password")
    .then((order) => {
      return res.send(order);
    });
};

exports.deleteOrderById = (req, res, next) => {
  const orderId = req.body.orderId;
  Order.deleteOne({ _id: orderId }).then(() => {
    res.send({ message: `Deleted Order ${orderId}` });
  });
};

exports.postReOrder = (req, res, next) => {
  const orderId = req.body.orderId;
  Order.findOne({ _id: orderId }).then((order) => {
    if (!order) {
      return res.status(405).send("Can'not re-order!");
    } else {
      const items = [...req.session.user.cart.items];
      order.books.forEach((bookOrdered) => {
        const bookIdx = items.findIndex((book) => {
          return book.bookId.toString() === bookOrdered.bookId.toString();
        });
        console.log(bookIdx);
        if (bookIdx >= 0) {
          items[bookIdx].quantity += Number(bookOrdered.quantity);
        } else {
          items.push({
            bookId: bookOrdered.bookId,
            quantity: bookOrdered.quantity,
          });
        }
      });
      req.session.user.cart.items = [...items];
      req.session.user.save();
      return res.send({ message: "added books to cart!", cart: req.session.user.cart,});
    }
  });
};
