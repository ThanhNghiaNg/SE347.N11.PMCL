import { useReducer } from "react";
import authContext, { initAuthCtx } from "./authContext";

const authReducer = (state, action) => {
  if (action.type === "LOGIN") {
    if (action.token) {
      localStorage.setItem("token", JSON.stringify(action.token));
      localStorage.setItem("isLoggedIn", "true");
      return { isLoggedIn: true, token: action.token };
    } else {
      return { ...state };
    }
  }

  if (action.type === "LOGOUT") {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    return { isLoggedIn: false, token: "" };
  }
  return { ...state };
};

const AuthProvider = (props) => {
  const [authCtx, dispatchAuth] = useReducer(authReducer, initAuthCtx);

  const loginHandler = (token) => {
    dispatchAuth({ type: "LOGIN", token: token });
  };
  const logoutHandler = () => {
    dispatchAuth({ type: "LOGOUT" });
  };

  const value = {
    isLoggedIn: authCtx.isLoggedIn,
    token: authCtx.token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthProvider;
