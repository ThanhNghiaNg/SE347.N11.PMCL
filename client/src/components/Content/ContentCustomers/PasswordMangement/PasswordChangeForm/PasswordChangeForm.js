import { useState } from "react";

import SubmitButton from "../../SubmitButton/SubmitButton";

import classes from "./PasswordChangeForm.module.css";

const inputFields = [
  {
    name: "oldPassword",
    label: "Mật khẩu cũ",
    placeholder: "Nhập mật khẩu cũ",
  },
  {
    name: "newPassword",
    label: "Mật khẩu mới",
    placeholder: "Nhập mật khẩu mới",
  },
  {
    name: "confirmPassword",
    label: "Nhập lại mật khẩu mới",
    placeholder: "Nhập lại mật khẩu mới",
  },
];

const eyeIcon =
  "https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png";
const eyeSplashIcon =
  "https://frontend.tikicdn.com/_desktop-next/static/img/account/eye-splash.png";

const PasswordChangeForm = (props) => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();


    if (passwords.newPassword !== passwords.confirmPassword) {
      setShowErrorMessage(true);
      setPasswords({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      setShowErrorMessage(false);
      props.onSavePasswords(passwords);
    }

  };

  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      {inputFields.map((item, index) => (
        <div key={index} className={classes["form-control"]}>
          <label className={classes["input-label"]}>{item.label}</label>
          <div className={classes["input-container"]}>
            <input
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  [item.name]: e.target.value,
                }))
              }
              value={passwords[item.name]}
              className={classes["input-field"]}
              type="password"
              name={item.name}
              maxLength="32"
              placeholder={item.placeholder}
              required
            />
          </div>
          {/* <img src={eyeIcon} className={classes["eye-icon"]} /> */}
          {item.name === "newPassword" ? (
            <div className={classes["message"]}>
              Mật khẩu phải dài từ 8 ký tự
            </div>
          ) : null}
          {item.name === "confirmPassword"
            ? showErrorMessage && (
                <div className={classes["message"]} style={{ color: "red" }}>
                  Mật khẩu mới phải thống nhất giữa 2 lần nhập
                </div>
              )
            : null}
        </div>
      ))}
      <SubmitButton />
    </form>
  );
};

export default PasswordChangeForm;
