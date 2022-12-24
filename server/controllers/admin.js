const Book = require("../models/book");
const Author = require("../models/author");
const Order = require("../models/order");

// add book to database
exports.addBook = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const authors = req.body.authors;
  const category = req.body.category;
  const publisher = req.body.publisher;
  const short_description = req.body.short_description;
  const description = req.body.description;
  const images = req.body.images;
  const quantity_sold = req.body.quantity_sold;
  const amount = req.body.amount;
  // console.log(authors);
  const newBook = new Book({
    title: title,
    authors: authors,
    category: category,
    publisher: publisher,
    price: price,
    images: images,
    amount: amount,
    quantity_sold: quantity_sold,
    description: description,
    short_description: short_description,
    rate: 0,
  });
  return newBook.save().then(() => {
    return res.send({ message: "Added Book!" });
  });
};

exports.updateBook = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const price = req.body.price;
  const authors = req.body.authors;
  const category = req.body.category;
  const publisher = req.body.publisher;
  const short_description = req.body.short_description;
  const description = req.body.description;
  const images = req.body.images;
  const quantity_sold = req.body.quantity_sold;
  const amount = req.body.amount;

  Book.findOne({ _id: id }).then((book) => {
    if (!book) {
      return res.status(405).send({ message: "Book not found!" });
    } else {
      book.title = title;
      book.price = price;
      book.authors = authors;
      book.category = category;
      book.publisher = publisher;
      book.short_description = short_description;
      book.description = description;
      book.images = images;
      book.quantity_sold = quantity_sold;
      book.amount = amount;

      return book.save().then((result) => {
        return res.send({ message: "Updated Book!" });
      });
    }
  });
};

exports.deleteBookById = (req, res, next) => {
  const id = req.body.id;
  Book.deleteOne({ _id: id }).then((result) => {
    return res.send({ message: "Deleted Book!" });
  });
};

exports.getAllOrders = (req, res, next) => {
  const query = req.query.query;
  Order.find()
    .populate("books.bookId")
    .populate("user")
    .then((results) => {
      if (query) {
        const filteredResult = [];
        results.forEach((result) => {
          const isQueryInOrderID = result._id.toString().includes(query);
          const isQueryInUserID = result.user._id.toString().includes(query);
          const isQueryInBookTitle = result.books
            .map((book) => book.bookId.title)
            .join(" ")
            .toLowerCase()
            .includes(query);
          const isQueryInBookId = result.books
            .map((book) => book.bookId._id.toString())
            .join(" ")
            .toLowerCase()
            .includes(query);
          const isQueryInUserEmail = result.user.email.includes(query);
          if (
            isQueryInOrderID ||
            isQueryInUserID ||
            isQueryInBookTitle ||
            isQueryInUserEmail ||
            isQueryInBookId
          ) {
            filteredResult.push(result);
          }
        });
        return res.send(filteredResult);
      }
      return res.send(results);
    });
};

exports.postUpdateOrder = (req, res, next) => {
  const id = req.body.id;
  const status = req.body.status;
  const detail = req.body.detail;

  Order.findOne({ _id: id }).then((order) => {
    if (!order) {
      return res.status(405).send({ message: "Order Id is not valid!" });
    } else {
      order.status.status = status;
      order.status.detail = detail;
      return order.save().then(() => {
        return res.send({ message: "Updated Order!" });
      });
    }
  });
};

exports.postDeleteOrder = (req, res, next) => {
  const id = req.body.id;
  Order.deleteOne({ _id: id }).then((result) => {
    res.send({ message: `Deleted Order Id: ${id}` });
  });
};

exports.postAddAuthor = (req, res, next) => {
  const authorName = req.body.name;
  const authorPseudonym = req.body.pseudonym;

  Author.find({ name: authorName }).then((result) => {
    // No author, create new
    if (!result[0]) {
      const author = new Author({
        name: authorName,
        pseudonym: authorPseudonym,
      });

      return author.save().then(() => {
        res.send(author);
      });
    }
    // have author, return with pseudonym
    else {
      if (result.length > 1 && authorPseudonym) {
        const author = result.filter((a) => a.pseudonym === authorPseudonym)[0];
        return res.send(author);
      } else {
        return res.send(result[0]);
      }
    }
  });
};
