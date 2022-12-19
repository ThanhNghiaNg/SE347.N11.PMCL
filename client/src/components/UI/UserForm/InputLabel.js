import classes from "./InputLabel.module.css";

const InputLabel = (props) => {
  return <label className={classes["input-label"]}>{props.children}</label>;
};

export default InputLabel;
