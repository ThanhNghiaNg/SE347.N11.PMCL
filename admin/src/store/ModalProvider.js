import { useReducer } from "react";
import modalContext from "./modalContext";
export const SHOW_INFORM = "SHOW_INFORM";
export const SHOW_ERROR = "SHOW_ERROR";
export const SHOW_CONFIRM = "SHOW_CONFIRM";
export const CONFIRMED = "CONFIRMED";
export const HIDE_MODAL = "HIDE_MODAL";

const initState = {
  message: "",
  isShowInform: false,
  isShowError: false,
  isShowConfirm: false,
  action: () => {},
};

const modalReducer = (state, action) => {
  if (action.type === SHOW_INFORM) {
    return {
      message: action.message,
      isShowInform: true,
      isShowError: false,
      isShowConfirm: false,
    };
  }
  if (action.type === SHOW_ERROR) {
    return {
      message: action.message,
      isShowInform: false,
      isShowError: true,
      isShowConfirm: false,
    };
  }
  if (action.type === SHOW_CONFIRM) {
    console.log("here");
    console.log(action.action);
    return {
      message: action.message,
      isShowInform: false,
      isShowError: false,
      isShowConfirm: true,
      action: action.action,
    };
  }
  if (action.type === HIDE_MODAL) {
    return initState;
  }
  return state;
};

const ModalProvider = (props) => {
  const [modalCtx, dispatchModal] = useReducer(modalReducer, initState);
  const showInformHandler = (message) => {
    dispatchModal({ type: SHOW_INFORM, message });
  };
  const showErrorHandler = (message) => {
    dispatchModal({ type: SHOW_ERROR, message });
  };
  const showConfirmHandler = (message, action) => {
    dispatchModal({ type: SHOW_CONFIRM, message, action });
  };
  const hideModalHandler = () => {
    dispatchModal({ type: HIDE_MODAL });
  };
  const value = {
    message: modalCtx.message,
    isShowInform: modalCtx.isShowInform,
    isShowError: modalCtx.isShowError,
    isShowConfirm: modalCtx.isShowConfirm,
    action: modalCtx.action,
    showInform: showInformHandler,
    showError: showErrorHandler,
    hideModal: hideModalHandler,
    showConfirm: showConfirmHandler,
  };
  return (
    <modalContext.Provider value={value}>
      {props.children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
