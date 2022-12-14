import classes from "./CartItem.module.css";
import QuantityInput from "../BookDetail/QuantityInput";
import { addDotStyle, hostURL } from "../../utils/global";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/products";
import { popupActions } from "../../store/popup";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  console.log(item.quantity);
  const bookPrice = addDotStyle(String(item.bookId.price));
  const bookTotalPrice = addDotStyle(String(item.bookId.price * item.quantity));

  const changeQuantityHandler = (quantityUpdated) => {
    const postChangeQuantity = async () => {
      const respone = await fetch(`${hostURL}/cart-update-quantity`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId: item.bookId._id,
          quantity: quantityUpdated,
        }),
      });
      props.onRefresh();
    };
    postChangeQuantity();
  };

  const deleteCartItemHandler = () => {
    const postDeleteBook = async () => {
      const respone = await fetch(`${hostURL}/cart-delete-item`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId: item.bookId._id }),
      });
      dispatch(productActions.descreaseNumberProductCart());
      props.onRefresh();
    };
    dispatch(
      popupActions.showConfirm({
        message: "Bạn có muốn xoá sản phẩm đang chọn?",
        action: postDeleteBook,
      })
    );
  };

  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <img src={item.bookId.images[0].url}></img>
        <span>{item.bookId.title}</span>
      </div>
      <span>{bookPrice}</span>
      <span>
        <QuantityInput
          default={item.quantity}
          getQuantity={changeQuantityHandler}
        />
      </span>
      <span className={`text-danger`}>{bookTotalPrice}</span>
      <button className={classes["btn-delete"]} onClick={deleteCartItemHandler}>
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
};

export default CartItem;
