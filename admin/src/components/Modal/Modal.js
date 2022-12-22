import classes from "./Modal.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import { createPortal } from "react-dom";
import modalContext from "../../store/modalContext";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const Overlay = (props) => {
  const modalCtx = useContext(modalContext);
  const hideModalHandler = () => {
    modalCtx.hideModal();
  };
  const confirmHandler = () => {
    console.log(modalCtx.action)
    modalCtx.action();
  };

  return (
    <Backdrop onClick={hideModalHandler}>
      <Card className={classes.overlay}>
        <div className={`${classes.icon}`}>
          {modalCtx.isShowInform && (
            <i class="fa-solid fa-circle-info text-success"></i>
          )}
          {modalCtx.isShowError && (
            <i class="fa-solid fa-triangle-exclamation text-danger"></i>
          )}
        </div>
        <div className={classes.message}>
          <p className="fs-4 pt-4">{modalCtx.message}</p>
        </div>
        {modalCtx.isShowConfirm && (
          <div className={classes["actions-control"]}>
            <button className="btn btn-danger mx-3" onClick={confirmHandler}>
              Xác nhận
            </button>
            <button className="btn btn-secondary mx-3" onClick={hideModalHandler}>
              Huỷ
            </button>
          </div>
        )}
      </Card>
    </Backdrop>
  );
};

const Modal = (props) => {
  return <>{createPortal(<Overlay />, document.getElementById("modal"))}</>;
};

export default Modal;
