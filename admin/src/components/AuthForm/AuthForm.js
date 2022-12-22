import classes from "./AuthForm.module.css";
import { hostURL } from "../../utils/global";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../store/authContext";

const AuthForm = (props) => {
  const authCtx = useContext(authContext);
  const navigate = useNavigate();
  const isLogin = props.isLogin;
  const usernameRef = useRef();
  const secretKeyRef = useRef();
  const [password, setPassword] = useState();
  const enteredPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const authHandler = (event) => {
    event.preventDefault();
    const postAdminAuth = async () => {
      const sendObj = isLogin
        ? {
            username: usernameRef.current.value,
            password: password,
          }
        : {
            username: usernameRef.current.value,
            password: password,
            secretKey: secretKeyRef.current.value,
          };
      const respone = await fetch(
        `${hostURL}/${isLogin ? "admin-login" : "admin-register"}`,
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sendObj),
        }
      );
      const data = await respone.json();
      if (respone.status === 200) {
        if (isLogin) {
          authCtx.login(data.token);
          navigate("/");
        } else {
          navigate("/login");
        }
      } else {
        alert(data.message);
      }
      console.log(data);
    };
    postAdminAuth();
  };

  return (
    <form className={classes.form}>
      <input type="text" placeholder="Username" ref={usernameRef}></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={enteredPasswordHandler}
      ></input>
      {!isLogin && (
        <input type="text" placeholder="Secret Key" ref={secretKeyRef}></input>
      )}
      <button className={`btn bg-success text-white`} onClick={authHandler}>
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </button>
    </form>
  );
};

export default AuthForm;
