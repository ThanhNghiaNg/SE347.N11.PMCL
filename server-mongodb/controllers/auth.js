const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.postRegister = (req, res, next) => {
  const { username, password, address, email, phone, birthday, sex, country } =
    req.body;
  User.findOne({ username: username }).then((user) => {
    // Nếu chưa có user name tồn tại
    if (!user) {
      return bcrypt.hash(password, 12).then((hasPassword) => {
        const newUser = new User({
          username,
          password: hasPassword,
          address,
          email,
          phone,
          birthday,
          sex,
          country,
        });
        return newUser.save().then((err) => {
          if (err) {
            console.log(err);
            return;
          } else {
            return res.status(200).send({ message: "Register Successfully!" });
          }
        });
      });
    }
    // Nếu đã có xuất ra thông báo lỗi
    return res
      .status(401)
      .send({ message: "Register Fail! Username Already Exists!" });
  });
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (!user) {
      return res
        .status(401)
        .send({ message: "Login fail! User is not registered!" });
    } else {
      return bcrypt.compare(password, user.password).then((doMatched) => {
        if (doMatched) {
          // create new session
          req.session.isLoggedIn = true;
          req.session.user = user._id;
          return req.session.save().then(() => {
            return res.status(200).send({ message: "Login successfully!" });
          });
        } else {
          return res.status(401).send({ message: "Password is incorrect!" });
        }
      });
    }
  });
};

exports.postLogout = (req, res, next) => {
    console.log(req);
    req.session.destroy((err) => {
      if (!err) {
        return res.status(200).send({ message: "Successfully Logout!" });
      } else {
        console.log(err);
        return res.status(403).send({ message: "Logout Error" });
      }
    });
  };
