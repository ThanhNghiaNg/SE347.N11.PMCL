import classes from "./InputField.module.css";

const InputField = (props) => {
  return <input className={classes["input-field"]} {...props} />;
};

export default InputField;
