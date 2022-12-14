const express = require("express");

const route = express.Router();
const shopControllers = require("../controllers/shop");
const isAuth = require("../middleware/is_auth");

// Get all book from database
route.get("/", shopControllers.fetchAllBooks);

// Post Add item to  cart
route.post("/add-to-cart", isAuth, shopControllers.postAddToCart);

// Get items cart
route.get("/cart", isAuth, shopControllers.getCart);

// Post order
route.post("/order", isAuth, shopControllers.postOrder);

// Get order items
route.get("/order", isAuth, shopControllers.getOrder);


module.exports = route;
