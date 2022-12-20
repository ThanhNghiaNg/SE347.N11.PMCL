const User = require("../models/user");
module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({message: "Access Fail! User is not Logged In!"});
  }
  User.findOne({ _id: req.session.user }).then((user) => {
    req.session.user = user;
    next();
  });
};
