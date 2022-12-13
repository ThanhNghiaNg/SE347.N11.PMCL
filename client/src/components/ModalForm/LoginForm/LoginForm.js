import { useRef } from "react";
import { hostURL } from "../../../utils/global";
import classes from "./LoginForm.module.css";
import { authActions } from "../../../store/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const logoutHandler = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((respone) => {
        console.log(respone);
        return respone.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    const postLogin = async () => {
      const respone = await fetch(`${hostURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await respone.json();
      dispatch(authActions.login(data.token));
      console.log(data);
    };
    postLogin();
  };
  return (
    <div>
      <div className={classes["login-form__heading"]}>
        <h4>Đăng nhập bằng email</h4>
        <p>Nhập email và mật khẩu tài khoản tiki</p>
      </div>
      <form className={classes["login-form"]} onSubmit={loginHandler}>
        <div className={classes["login-form__email"]}>
          <input
            type="email"
            name="email"
            placeholder="Email đăng nhập"
            ref={emailRef}
          />
        </div>
        <div className={classes["login-form__password"]}>
          <input
            type="password"
            name="login-password"
            placeholder="Mật khẩu"
            ref={passwordRef}
          />
        </div>
        <div className={classes["login-form__actions"]}>
          <button>ĐĂNG NHẬP</button>
        </div>
      </form>

      <div className={classes["login-form__reset"]} onClick={logoutHandler}>
        <p>Quên mật khẩu</p>
      </div>
    </div>
  );
};

export default LoginForm;
