const express = require("express");
const isAuth = require("../middleware/is_auth");
const authControllers = require("../controllers/auth");
const route = express.Router();

route.post("/register", authControllers.postRegister);
route.post("/login", authControllers.postLogin);
route.post("/logout", authControllers.postLogout);

module.exports = route;
