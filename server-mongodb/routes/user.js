const express = require("express");
const isAuth = require("../middleware/is_auth");
const userControllers = require("../controllers/user");
const route = express.Router();

route.get("/update", isAuth, userControllers.getUpdate);
route.post("/update", isAuth, userControllers.postUpdate);
route.post("/change-password", isAuth, userControllers.postChangePassword);


module.exports = route;
