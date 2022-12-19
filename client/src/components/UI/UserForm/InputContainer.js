import classes from "./InputContainer.module.css";

const InputContainer = (props) => {
  return <div className={classes["input-container"]}>{props.children}</div>;
};

export default InputContainer;
