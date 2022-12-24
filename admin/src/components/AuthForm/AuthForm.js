import classes from "./AuthForm.module.css";
import { hostURL } from "../../utils/global";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../store/authContext";
import modalContext from "../../store/modalContext";

const AuthForm = (props) => {
  const authCtx = useContext(authContext);
  const modalCtx = useContext(modalContext);

  const navigate = useNavigate();
  const isLogin = props.isLogin;
  const usernameRef = useRef();
  const secretKeyRef = useRef();
  const [password, setPassword] = useState("");
  const enteredPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const authHandler = (event) => {
    event.preventDefault();
    console.log(secretKeyRef);
    const username = usernameRef.current.value;
    const secretKey = secretKeyRef.current ? secretKeyRef.current.value : false;

    if (!username || !password || (!isLogin && !secretKey)) {
      return modalCtx.showError("Bạn phải nhập đầy đủ các trường!");
    }
    const postAdminAuth = async () => {
      const sendObj = isLogin
        ? {
            username: username,
            password: password,
          }
        : {
            username: username,
            password: password,
            secretKey: secretKey,
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
          modalCtx.showInform("Đăng ký thành công!");
          navigate("/login");
        }
      } else {
        modalCtx.showError(data.message);
      }
      console.log(data);
    };
    postAdminAuth();
  };

  return (
    <form className={classes.form}>
      <input type="text" placeholder="Username" ref={usernameRef} className='form-control'></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={enteredPasswordHandler} className='form-control'
      ></input>
      {!isLogin && (
        <input type="text" placeholder="Secret Key" ref={secretKeyRef} className='form-control'></input>
      )}
      <button className={`btn bg-success text-white`} onClick={authHandler}>
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </button>
    </form>
  );
};

export default AuthForm;
