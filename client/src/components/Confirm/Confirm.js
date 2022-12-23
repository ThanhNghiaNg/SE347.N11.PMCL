import { hostURL, addDotStyle } from "../../utils/global";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import UserPayment from "../Cart/UserPayment";
import wrapClasses from "../Cart/Cart.module.css";
import classes from "./Confirm.module.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";

const Confirm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryService, setDeliveryService] = useState("");

  useEffect(() => {
    const getCart = async () => {
      const respone = await fetch(`${hostURL}/cart`, {
        credentials: "include",
      });
      const data = await respone.json();
      console.log(data);
      setData(data);
      setItems(data.cart.items);
    };
    getCart();
  }, []);

  const orderHandler = (event) => {
    event.preventDefault();

    const postOrder = async () => {
      const respone = await fetch(`${hostURL}/order`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ deliveryService, paymentMethod }),
      });
      const data = await respone.json();
      dispatch(popupActions.showInform("Đặt hàng thành công!"));
      navigate("/");
    };
    console.log(paymentMethod, deliveryService, !deliveryService);
    if (!deliveryService) {
      console.log(deliveryService);
      return dispatch(
        popupActions.showError("Vui lòng chọn hình thức giao hàng!")
      );
    }
    if (!paymentMethod) {
      return dispatch(
        popupActions.showError("Vui lòng chọn hình thức thanh toán!")
      );
    }

    return postOrder();
  };

  const enteredPaymentMethod = (event) => {
    console.log(`target payment: ${event.target.value}`);
    setPaymentMethod(event.target.value);
  };
  const enteredDeliveryService = (event) => {
    console.log(`target: ${event.target.value}`);
    setDeliveryService(event.target.value);
  };

  let totalPriceCart = 0;
  let itemsListElement = "";
  if (items.length > 0) {
    itemsListElement = items.map((item, i) => {
      return (
        <div className="row border-bottom mb-5 pb-2">
          <div className={`col-8 ${classes.content}`}>
            <div>
              <img src={item.bookId.images[0].url}></img>
            </div>
            <div>
              <p>{item.bookId.title}</p>
              <p>Số lượng: {item.quantity}</p>
            </div>
          </div>
          <div className="col fw-bold align-self-center">
            {addDotStyle(String(item.bookId.price))}
          </div>
        </div>
      );
    });
    totalPriceCart = items.reduce(
      (acc, item) => acc + item.bookId.price * item.quantity,
      0
    );
    console.log(totalPriceCart);
    totalPriceCart = addDotStyle(String(totalPriceCart));
  }

  return (
    <div className={wrapClasses.wrap}>
      <div className={wrapClasses["list-items"]}>
        <Card>
          <h5 className="pb-3">Hình thức giao hàng</h5>
          <div className="payment-method" onChange={enteredDeliveryService}>
            <div className="d-flex pb-2">
              <input type="radio" value={"Giao Hàng Nhanh"} name="ship"></input>
              <label className="ps-3">Giao Hàng Nhanh</label>
            </div>
            <div className="d-flex">
              <input
                type="radio"
                value={"Giao Hàng Tiết Kiệm"}
                name="ship"
              ></input>
              <label className="ps-3">Giao Hàng Tiết Kiệm</label>
            </div>
          </div>
        </Card>
        <Card>
          <h5 className="pb-3">Hình thức thanh toán</h5>
          <div class="delivery-service" onChange={enteredPaymentMethod}>
            <div className="d-flex pb-2">
              <input
                type="radio"
                value={"Thanh toán bằng tiền mặt"}
                name="payment"
              ></input>
              <label className="ps-3">Thanh toán bằng tiền mặt</label>
            </div>
            <div className="d-flex">
              <input
                type="radio"
                value={"Thanh toán qua Momo"}
                name="payment"
              ></input>
              <label className="ps-3">Thanh toán qua Momo</label>
            </div>
          </div>
        </Card>
        <Card className={wrapClasses.items}>{itemsListElement}</Card>
      </div>
      <UserPayment
        checkout={true}
        checkoutButton={
          <button onClick={orderHandler} className={`btn btn-danger`}>
            Xác nhận đặt hàng
          </button>
        }
        totalPriceCart={totalPriceCart}
      />
    </div>
  );
};

export default Confirm;
