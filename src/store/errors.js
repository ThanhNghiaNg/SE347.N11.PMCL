import { createSlice } from "@reduxjs/toolkit";

const errorInitState = {
  searchNotFound: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState: errorInitState,
  reducers: {
    setNotFound: (state) => {
      state.searchNotFound = true;
    },
    setSuccessFound: (state) => {
      state.searchNotFound = false;
    },
  },
});

export const errorsActions = errorSlice.actions;
export default errorSlice.reducer;
