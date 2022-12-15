const { createSlice } = require("@reduxjs/toolkit");
const initAuthState = {
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "products",
  initialState: initAuthState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
