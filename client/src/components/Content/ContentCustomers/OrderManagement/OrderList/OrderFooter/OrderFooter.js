import { addDotStyle } from "../../../../../../utils/global";

import classes from "./OrderFooter.module.css";

const OrderFooter = (props) => {
  return (
    <div className={classes["order-item__footer"]}>
      <div className={classes["total-price"]}>
        <div className={classes["total-price__title"]}>Tổng tiền:</div>
        <div className={classes["total-price__total"]}>
          {addDotStyle(String(props.amount))} đ
        </div>
      </div>
      <div className={classes["actions"]}>
        <div>{props.status === "shipped" ? "Mua lại" : "Hủy đơn hàng"}</div>
      </div>
    </div>
  );
};

export default OrderFooter;
