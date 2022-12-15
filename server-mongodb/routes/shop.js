const express = require("express");

const route = express.Router();
const shopControllers = require("../controllers/shop");
const isAuth = require("../middleware/is_auth");

// Get all book from database
route.get("/", shopControllers.fetchAllBooks);

// Get book from database by Id
route.get("/book/:id", shopControllers.fetchBookById);

// Post Add item to  cart
route.post("/add-to-cart", isAuth, shopControllers.postAddToCart);

// Get items cart
route.get("/cart", isAuth, shopControllers.getCart);

// user update quantity of product in cart
route.get("/cart-update-quantity", isAuth, shopControllers.postUpdateCartAmount)

// Post order
route.post("/order", isAuth, shopControllers.postOrder);

// Get order items
route.get("/order", isAuth, shopControllers.getOrder);


module.exports = route;
