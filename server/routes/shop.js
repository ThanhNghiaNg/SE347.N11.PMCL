const express = require("express");
const path = require("path");
const fs = require("fs");
const Book = require("../models/book");

const route = express.Router();

route.get("/", (req, res, next) => {
  Book.findAll().then((books) => {
    const fullDataBook = books.map((book) => {
      fs.readFile(book.description, (err, data) => {
        if (!err) {
          return data;
        } else {
          console.log(err);
        }
      }).then(data=>{
        const obj = {
            ...book,
            description: description,
            author: JSON.parse(book.author),
            images: JSON.parse(book.images),
          }
      });
      return ;
    });
    res.send(JSON.stringify(fullDataBook));
  });
});

module.exports = route;
