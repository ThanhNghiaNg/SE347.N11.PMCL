const express = require("express");
const authControllers = require("../controllers/auth");
const route = express.Router();

route.post("/register", authControllers.postRegister);
route.post("/login", authControllers.postLogin);
route.post("/logout", authControllers.postLogout);

route.post("/admin-register", authControllers.postAdminRegister);
route.post("/admin-login", authControllers.postAdminLogin);
route.post("/admin-logout", authControllers.postAdminLogout);

module.exports = route;
