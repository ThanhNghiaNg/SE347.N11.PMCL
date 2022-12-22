import classes from "./Popup.module.css";
import Card from "../UI/Card";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CONFIRM, INFORM, ERROR, CLOSE, popupActions } from "../../store/popup";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const Overlay = (props) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.popup.status);
  const message = useSelector((state) => state.popup.message);
  const action = useSelector((state) => state.popup.action);

  const closePopupHandler = () => {
    dispatch(popupActions.closePopup());
  };
  const confirmHandler = () => {
    action();
  };

  return (
    <Backdrop onClick={closePopupHandler}>
      <Card className={classes.overlay}>
        <button
          className={`bg-white text-light btn-close ${classes["btn-close-modal"]}`}
          onClick={closePopupHandler}
        ></button>
        <div className={`${classes.icon}`}>
          {status === INFORM && (
            <i class="fa-solid fa-circle-info text-success"></i>
          )}
          {status === ERROR && (
            <i class="fa-solid fa-triangle-exclamation text-danger"></i>
          )}
        </div>
        <div className={classes.message}>
          <p className="fs-4 pt-4">{message}</p>
        </div>
        {status === CONFIRM && (
          <div className={classes["actions-control"]}>
            <button className="btn btn-danger mx-3" onClick={confirmHandler}>
              Xác nhận
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={closePopupHandler}
            >
              Huỷ
            </button>
          </div>
        )}
      </Card>
    </Backdrop>
  );
};

const Popup = (props) => {
  return <>{createPortal(<Overlay />, document.getElementById("popup"))}</>;
};

export default Popup;
