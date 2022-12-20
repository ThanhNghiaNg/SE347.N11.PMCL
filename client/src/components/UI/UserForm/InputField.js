import { useState } from "react";

import classes from "./InputField.module.css";

const InputField = (props) => {
  const [enteredInput, setEnteredInput] = useState("");

  return (
    <input
      onChange={(e) => setEnteredInput(e.target.value)}
      value={enteredInput}
      className={classes["input-field"]}
      {...props}
    />
  );
};

export default InputField;
