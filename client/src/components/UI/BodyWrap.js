import classes from "./BodyWrap.module.css";
const BodyWrap = (props) => {
  return <div className={classes.wrap}>{props.children}</div>;
};

export default BodyWrap;
