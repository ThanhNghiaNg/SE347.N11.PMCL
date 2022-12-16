import { createContext } from "react";

export const initAuthCtx = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: JSON.parse(localStorage.getItem("token")) || "",
  login: (token) => {},
  logout: () => {},
};

const authContext = createContext(initAuthCtx);

export default authContext;
