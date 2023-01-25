const express = require("express");

const route = express.Router();
const shopControllers = require("../controllers/shop");
const isAuth = require("../middleware/is_auth");

// Get all book from database
route.get("/", shopControllers.fetchAllBooks);

// Get book from database by Id
route.get("/book/:id", shopControllers.fetchBookById);

// Get reviews by book ID
route.get("/book/:id/reviews", shopControllers.getReviews);

// Post Add item to  cart
route.post("/add-to-cart", isAuth, shopControllers.postAddToCart);

// Get items cart
route.get("/cart", isAuth, shopControllers.getCart);

// user update quantity of product in cart
route.post("/cart-update-quantity", isAuth, shopControllers.postUpdateCartAmount)

route.post("/cart-delete-item", isAuth, shopControllers.postDeleteCartItem)

// Post order
route.post("/order", isAuth, shopControllers.postOrder);

// Get order items
route.get("/order", isAuth, shopControllers.getOrders);


module.exports = route;
