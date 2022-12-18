const { createSlice } = require("@reduxjs/toolkit");
const initAuthState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: localStorage.getItem("token") || "",
  remember: localStorage.getItem("keepLogin") || false,
};

function doesHttpOnlyCookieExist(cookiename) {
  var d = new Date();
  d.setTime(d.getTime() + 1000);
  var expires = "expires=" + d.toUTCString();

  document.cookie = cookiename + "=new_value;path=/;" + expires;
  return document.cookie.indexOf(cookiename + "=") == -1;
}

const authSlice = createSlice({
  name: "products",
  initialState: initAuthState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.token = "";
      state.remember = false;
    },
    rememberUser: (state, action) => {
      localStorage.setItem("keepLogin", "true");
      state.remember = true;
    },
    clearSession: function (state, action) {
      if (!state.remember && !doesHttpOnlyCookieExist("connect.sid")) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        state.isLoggedIn = false;
        state.token = "";
        state.remember = false;
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
