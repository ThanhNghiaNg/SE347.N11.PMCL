const User = require("../models/user");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const SECRET_KEY = require("../utils/global").SECRET_KEY;

// CUSTOMER USER

exports.postRegister = (req, res, next) => {
  const { email, password, address, name, phone, birthday, sex, country } =
    req.body;
  User.findOne({ email: email }).then((user) => {
    // Nếu chưa có user name tồn tại
    if (!user) {
      return bcrypt.hash(password, 12).then((hashPassword) => {
        const newUser = new User({
          email,
          password: hashPassword,
          address,
          name,
          phone,
          birthday,
          sex,
          country,
          cart: { items: [] },
        });
        return newUser.save().then((err) => {
          return res.status(200).send({ message: "Đăng ký thành công!" });
        });
      });
    }
    // Nếu đã có xuất ra thông báo lỗi
    return res
      .status(401)
      .send({ message: "Email đăng ký đã tồn tại!" });
  });
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res
        .status(401)
        .send({ message: "Email chưa được đăng ký!" });
    } else {
      return bcrypt.compare(password, user.password).then((doMatched) => {
        if (doMatched) {
          // create new session
          req.session.isLoggedIn = true;
          req.session.user = user._id;
          return req.session.save((err) => {
            console.log(err);
            return res
              .status(200)
              .send({ message: "Đăng nhập thành công!", token: user._id });
          });
        } else {
          return res.status(401).send({ message: "Mật khẩu không đúng!" });
        }
      });
    }
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (!err) {
      return res.status(200).send({ message: "Successfully Logout!" });
    } else {
      console.log(err);
      return res.status(403).send({ message: "Logout Error" });
    }
  });
};

// ADMIN USER

exports.postAdminRegister = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const secretKey = req.body.secretKey;

  if (secretKey !== SECRET_KEY) {
    return res.status(405).send({ message: "Secret Key is Incorrect!" });
  }

  Admin.findOne({ username: username }).then((admin) => {
    if (!admin) {
      return bcrypt.hash(password, 12).then((hashPassword) => {
        const newAdmin = new Admin({
          username: username,
          password: hashPassword,
        });
        newAdmin.save().then(() => {
          return res.send({ message: "Register Admin Successfully!" });
        });
      });
    }
    return res.status(401).send({ message: "Username already exists!" });
  });
};

exports.postAdminLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({ username: username }).then((admin) => {
    if (!admin) {
      return res
        .status(401)
        .send({ message: "Login fail! Username is not registered!" });
    } else {
      return bcrypt.compare(password, admin.password).then((doMatched) => {
        if (doMatched) {
          // create new session
          req.session.isLoggedIn = true;
          req.session.admin = admin._id;
          return req.session.save((err) => {
            console.log(err);
            return res
              .status(200)
              .send({ message: "Login successfully!", token: admin._id });
          });
        } else {
          return res.status(401).send({ message: "Password is incorrect!" });
        }
      });
    }
  });
};

exports.postAdminLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (!err) {
      return res.status(200).send({ message: "Successfully Logout!" });
    } else {
      console.log(err);
      return res.status(403).send({ message: "Logout Error" });
    }
  });
};
