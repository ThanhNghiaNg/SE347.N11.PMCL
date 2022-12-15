const Book = require("../models/book");
const Author = require("../models/author");

// add book to database
exports.addBook = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const authors = req.body.authors;
  const category = req.body.category;
  const publisher = req.body.publisher;
  const short_description = req.body.short_description;
  const description = req.body.description;
  const images = JSON.parse(req.body.images);
  const quantity_sold = req.body.quantity_sold;
  const amount = req.body.amount;

  Author.findOne({ name: authors }).then((author) => {
    const newBook = new Book({
      title: title,
      authors: [],
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
    if (!author) {
      const newAuthor = new Author({ name: authors });
      newAuthor.save().then((result) => {
        newBook.authors = [{ authorId: newAuthor._id, name: newAuthor.name }];
        return newBook.save().then(() => {
          console.log("Add new Author");
          res.send({ message: "Added Book!" });
        });
      });
    } else {
      newBook.authors = [{ authorId: author._id, name: author.name }];
      return newBook.save().then(() => {
        res.send({ message: "Added Book!" });
      });
    }
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
  const images = JSON.parse(req.body.images);
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
