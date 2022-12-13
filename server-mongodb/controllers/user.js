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
  
  updatedAddress = req.body.address;
  updatedName = req.body.name;
  updatedEmail = req.body.email;
  updatedPhone = req.body.phone;
  updatedBirthday = req.body.birthday;
  updatedSex = req.body.sex;
  updatedCountry = req.body.country;

  req.session.user.address = updatedAddress;
  req.session.user.name = updatedName;
  req.session.user.email = updatedEmail;
  req.session.user.phone = updatedPhone;
  req.session.user.birthday = updatedBirthday;
  req.session.user.sex = updatedSex;
  req.session.user.country = updatedCountry;

  req.session.user.save((err) => {
    console.log(err);
    return res.send({ message: "Updated!" });
  });
};
