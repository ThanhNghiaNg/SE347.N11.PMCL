import classes from "./OrderHeader.module.css";

const OrderHeader = (props) => {
  return <div className={classes["order-item__header"]}>{props.children}</div>;
};

export default OrderHeader;
