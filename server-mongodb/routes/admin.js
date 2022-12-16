const express = require("express");
const adminControllers = require("../controllers/admin");
const route = express.Router();

route.post("/add-book", adminControllers.addBook);
route.post("/update-book/:id", adminControllers.updateBook);
route.post("/delete-book", adminControllers.deleteBookById);
route.get("/orders", adminControllers.getAllOrders);
route.post("/update-order", adminControllers.postUpdateOrder);
route.post("/delete-order", adminControllers.postDeleteOrder);

module.exports = route;
