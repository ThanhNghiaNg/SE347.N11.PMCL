import { useState } from "react";

import LoginForm from "./LoginForm/LoginForm";
import AlternativeForm from "./AlternativeForm/AlternativeForm";
import RegisterForm from "./RegisterForm/RegisterForm";

import classes from "./ModalForm.module.css";

const ModalForm = () => {
  const [showRegisForm, setShowRegisForm] = useState(false);

  const showRegisFormHandler = () => {
    setShowRegisForm(!showRegisForm);
  };

  return (
    <div
      style={{
        border: "none",
        backgroundColor: "rgb(248, 248, 248)",
        borderRadius: 20,
        width: 800,
        position: "relative",
        margin: "80px auto",
      }}
    >
      <div className={classes["modal-form"]}>
        <button className={classes["modal-form__btn-close"]}>
          <img
            className={classes["close-img"]}
            src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
          />
        </button>

        <div className={classes["modal-form__left"]}>
          <div className={classes["modal-form__inner"]}>
            {showRegisForm && (
              <button
                onClick={showRegisFormHandler}
                className={classes["modal-form__btn-back"]}
              >
                <img
                  src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png"
                  alt="arrow"
                />
              </button>
            )}

            {showRegisForm === false ? <LoginForm /> : <RegisterForm />}

            <AlternativeForm />

            {showRegisForm || (
              <div className={classes["modal-form__regis"]}>
                <p>
                  Bạn lần đầu biết đến Owwi?{" "}
                  <span onClick={showRegisFormHandler}>Tạo tài khoản</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={classes["modal-form__right"]}>
          <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" />

          <div className={classes["content"]}>
            <h4>Mua sắm tại Owwi</h4>
            <p>Siêu ưu đãi mỗi ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
