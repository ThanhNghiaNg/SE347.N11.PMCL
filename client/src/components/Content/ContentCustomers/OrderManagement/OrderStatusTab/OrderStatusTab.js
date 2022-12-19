import { useState } from "react";
import classes from "./OrderStatusTab.module.css";

const OrderStatusTab = (props) => {
  const [selected, setSelected] = useState(0);

  const selectedHandler = (statusID) => {
    setSelected(statusID);

    props.onSetStatusCategory(
      props.orderStatus.filter((statusItem) => statusItem.id === statusID)[0]
        .code
    );
  };

  return (
    <div className={classes["status-tab"]}>
      {props.orderStatus.map((statusItem) => (
        <div
          key={statusItem.id}
          className={`${classes["status"]} ${
            selected === statusItem.id ? classes["selected"] : ""
          }`}
          onClick={() => selectedHandler(statusItem.id)}
        >
          {statusItem.category}
        </div>
      ))}
    </div>
  );
};

export default OrderStatusTab;
