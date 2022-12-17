import classes from "./Filter.module.css";

function Filter(props) {
  return (
    <div id={props.id} className={classes["filter_container"]}>
      {props.children}
    </div>
  );
}

export default Filter;
