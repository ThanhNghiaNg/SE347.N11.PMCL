import { createSlice } from "@reduxjs/toolkit";
export const CONFIRM = "CONFIRM";
export const INFORM = "INFORM";
export const ERROR = "ERROR";
export const CLOSE = "CLOSE";

const initPopupState = {
  message: "",
  status: CLOSE,
  action: () => {},
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initPopupState,
  reducers: {
    showInform: (state, action) => {
      state.message = action.payload;
      state.status = INFORM;
    },
    showError: (state, action) => {
      state.message = action.payload;
      state.status = ERROR;
    },
    showConfirm: (state, action) => {
      state.message = action.payload.message;
      state.action = action.payload.action;
      state.status = CONFIRM;
    },
    closePopup: (state, action) => {
      state.message = "";
      state.status = CLOSE;
      state.action = () => {};
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
