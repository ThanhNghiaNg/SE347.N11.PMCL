import { useState } from "react";

import classes from "./ReviewTab.module.css";

const ReviewTab = (props) => {
  const [selected, setSelected] = useState(0);

  const selectedHandler = (statusID) => {
    setSelected(statusID);

    props.onSetStatusCategory(
      props.reviewStatus.filter((statusItem) => statusItem.id === statusID)[0]
        .code
    );
  };

  return (
    <div className={classes["status-tab"]}>
      {props.reviewStatus.map((statusItem) => (
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

export default ReviewTab;
