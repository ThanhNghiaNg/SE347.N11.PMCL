const express = require("express");
const Book = require("../models/book");
const route = express.Router();

route.get("/", (req, res, next) => {
  Book.fetchAll().then((allBooks) => {
    res.send(JSON.stringify(allBooks));
  });
});

module.exports = route;
