import classes from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return (
    <button {...props} type="submit" className={classes["form-actions"]}>
      {props.value ? props.value : "Lưu thay đổi"}
    </button>
  );
};

export default SubmitButton;
