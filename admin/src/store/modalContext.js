import { createContext } from "react";

const modalContext = createContext({
  message: "",
  isShowInform: false,
  isShowError: false,
  isConfirmAction: false,
  isShowConfirm: false,
  action: null,

  showInform: (message) => {},
  showError: (message) => {},
  showConfirm: (message, action) => {},
  hideModal: () => {},
});

export default modalContext;
