import classes from "./FormControl.module.css";

const FormControl = (props) => {
  return <div className={classes["form__control"]}>{props.children}</div>;
};

export default FormControl;
