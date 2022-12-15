const express = require("express");
const adminControllers = require("../controllers/admin")
const route = express.Router();

route.post("/add-book", adminControllers.addBook);
route.post("/update-book/:id", adminControllers.updateBook);
route.post("/delete-book", adminControllers.deleteBookById);

module.exports = route;
