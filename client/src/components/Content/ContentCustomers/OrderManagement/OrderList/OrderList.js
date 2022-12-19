import OrderHeader from "./OrderHeader/OrderHeader";
import OrderContent from "./OrderContent/OrderContent";
import OrderFooter from "./OrderFooter/OrderFooter";

import classes from "./OrderList.module.css";

const OrderList = (props) => {
  return (
    <div className={classes["order-list"]}>
      {props.orders.map((order) => (
        <div key={order.id} className={classes["order-item"]}>
          <OrderHeader>
            {
              props.orderStatus.filter(
                (statusItem) => statusItem.code === order.status
              )[0].status
            }
          </OrderHeader>
          <OrderContent products={order.products} />
          <OrderFooter status={order.status} amount={order.amount} />
        </div>
      ))}
    </div>
  );
};

export default OrderList;
