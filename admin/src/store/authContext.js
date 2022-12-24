import { createContext } from "react";
import { doesHttpOnlyCookieExist } from "../utils/global";

if (!doesHttpOnlyCookieExist("connect.sid")) {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("token");
}

export const initAuthCtx = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: localStorage.getItem("token") || "",
  login: (token) => {},
  logout: () => {},
  clearSession: () => {},
};

const authContext = createContext(initAuthCtx);

export default authContext;
