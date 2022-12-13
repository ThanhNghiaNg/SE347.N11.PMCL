const express = require("express");
const Book = require("../models/book");
const route = express.Router();

// Get all book from database
route.get("/", (req, res, next) => {
  Book.find()
    .then((books) => {
      res.send({ data: books });
    });
});

module.exports = route;
