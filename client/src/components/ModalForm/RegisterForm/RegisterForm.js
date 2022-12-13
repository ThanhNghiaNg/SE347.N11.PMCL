import { useRef } from "react";
import classes from "./RegisterForm.module.css";
import { hostURL } from "../../../utils/global";

const RegisterForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const registerHandler = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) return;

    const postRegisterInfor = async () => {
      const respone = await fetch(`${hostURL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      // console.log(respone);
      if (respone.status === 200) {
        props.onBackLogin();
      }
      const data = await respone.json();
      console.log(data);
    };
    postRegisterInfor();
  };
  return (
    <div>
      <div className={classes["regis-form__heading"]}>
        <h4>Tạo tài khoản</h4>
        <p>Vui lòng nhập email và mật khẩu</p>
      </div>
      <form className={classes["regis-form"]} onSubmit={registerHandler}>
        <div className={classes["regis-form__email"]}>
          <input
            type="email"
            name="email"
            placeholder="Email đăng ký"
            ref={emailRef}
          />
        </div>
        <div className={classes["regis-form__password"]}>
          <input
            type="password"
            name="regis-password"
            placeholder="Mật khẩu"
            ref={passwordRef}
          />
        </div>
        <div className={classes["regis-form__password"]}>
          <input
            type="password"
            name="confirm-password"
            placeholder="Nhập lại mật khẩu"
            ref={confirmPasswordRef}
          />
        </div>
        <div className={classes["regis-form__actions"]}>
          <button>TẠO TÀI KHOẢN</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
