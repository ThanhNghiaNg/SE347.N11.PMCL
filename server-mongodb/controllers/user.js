const User = require("../models/user");
const bcrypt = require("bcryptjs");
exports.getUpdate = (req, res, next) => {
  User.find({ _id: req.session.user._id }).then((user) => {
    return res.send({
      address: user.address,
      email: user.email,
      phone: user.phone,
      birthday: user.birthday,
      sex: user.sex,
      country: user.country,
    });
  });
};

exports.postChangePassword = (req, res, next) => {
  const { password, newPassowrd } = req.body;
  bcrypt.compare(password, req.session.user.password).then((doMatched) => {
    if (doMatched) {
      return bcrypt.hash(newPassowrd).then((hashPassword) => {
        req.session.user.password = hashPassword;
        return req.session.user.save().then((err) => {
          res.status(200).send({ message: "Changed Password!" });
        });
      });
    } else {
      return res.status(401).send({ message: "Password is not correct!" });
    }
  });
};

exports.postUpdate = (req, res, next) => {
  const {
    updatedAddress,
    updatedEmail,
    updatedPhone,
    updatedBirthday,
    updatedSex,
    updatedCountry,
  } = req.body;
  // req.session.user.address
  // req.session.user.us
  // req.session.user.
  // req.session.user.
  // req.session.user.
  // req.session.user.
  // req.session.user.
};
