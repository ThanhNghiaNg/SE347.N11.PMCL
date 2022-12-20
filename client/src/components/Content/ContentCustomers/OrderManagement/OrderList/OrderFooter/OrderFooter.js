import { addDotStyle, hostURL } from "../../../../../../utils/global";

import classes from "./OrderFooter.module.css";

const OrderFooter = (props) => {
  const submitHandler = () => {
    if (props.status === "shipped") {
    } else {
      const postDeteleOrder = async () => {
        const respone = await fetch(`${hostURL}/user/cancel-order`, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: props.orderId }),
        });
        const data = await respone.json();
        console.log(data);
        props.onRefresh();
      };
      postDeteleOrder();
    }
  };
  return (
    <div className={classes["order-item__footer"]}>
      <div className={classes["total-price"]}>
        <div className={classes["total-price__title"]}>Tổng tiền:</div>
        <div className={classes["total-price__total"]}>
          {addDotStyle(String(props.amount))}
        </div>
      </div>
      <div className={classes["actions"]} onClick={submitHandler}>
        <div>{props.status === "shipped" ? "Mua lại" : "Hủy đơn hàng"}</div>
      </div>
    </div>
  );
};

export default OrderFooter;
