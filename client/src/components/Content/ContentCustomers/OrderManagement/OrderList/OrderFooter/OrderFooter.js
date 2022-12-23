import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { popupActions } from "../../../../../../store/popup";
import { productActions } from "../../../../../../store/products";
import { addDotStyle, hostURL } from "../../../../../../utils/global";

import classes from "./OrderFooter.module.css";

const OrderFooter = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = () => {
    if (props.order.status === "shipped") {
      const postReOrder = async () => {
        const respone = await fetch(`${hostURL}/user/re-order`, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: props.order.id }),
        });
        if (respone.status === 200) {
          const data = await respone.json();
          console.log(data);

          dispatch(
            productActions.setQuantityProductCart(
              data.cart.items.reduce((acc, item) => item.quantity + acc)
            )
          );
          navigate("/cart");
        }
      };
      postReOrder();
    } else {
      const postDeteleOrder = async () => {
        const respone = await fetch(`${hostURL}/user/cancel-order`, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: props.order.id }),
        });
        const data = await respone.json();
        console.log(data);
        props.onRefresh();
      };
      dispatch(
        popupActions.showConfirm({
          message: "Bạn có muốn huỷ đơn hàng này không?",
          action: postDeteleOrder,
        })
      );
    }
  };

  const navigateOrderDetailHandler = () => {
    console.log(props.order);
    navigate(`/order/${props.order.id}`);
  };

  return (
    <div className={classes["order-item__footer"]}>
      <div className={classes["total-price"]}>
        <div className={classes["total-price__title"]}>Tổng tiền:</div>
        <div className={classes["total-price__total"]}>
          {addDotStyle(String(props.order.amount))}
        </div>
      </div>
      <div className={classes["order-item__actions"]}>
        <div className={classes["actions-button"]} onClick={submitHandler}>
          <div>
            {props.order.status === "shipped" ? "Mua lại" : "Hủy đơn hàng"}
          </div>
        </div>
        <div
          className={classes["actions-button"]}
          onClick={navigateOrderDetailHandler}
        >
          <div>Xem chi tiết</div>
        </div>
      </div>
    </div>
  );
};

export default OrderFooter;
