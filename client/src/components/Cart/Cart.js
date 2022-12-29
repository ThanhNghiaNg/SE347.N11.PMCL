import { useEffect, useState } from "react";
import { addDotStyle, hostURL } from "../../utils/global";
import Container from "../UI/Container";
import BodyWrap from "../UI/BodyWrap";
import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
import UserPayment from "./UserPayment";

const Cart = (props) => {
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [toggleRefrresh, setToggleRefresh] = useState(false);

  useEffect(() => {
    document.title = "Cart"
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
  }, [toggleRefrresh]);

  const refreshHandler = () => {
    setToggleRefresh((prev) => !prev);
  };

  let itemsListElement = (
    <p className="text-center fs-5">
      Chưa có sản phẩm nào trong giỏ hàng của bạn!
    </p>
  );
  let totalPriceCart = 0;
  
  if (items.length > 0) {
    itemsListElement = items.map((item, i) => {
      return <CartItem item={item} key={i} onRefresh={refreshHandler} />;
    });
    totalPriceCart = items.reduce(
      (acc, item) => acc + item.bookId.price * item.quantity,
      0
    );
    totalPriceCart = addDotStyle(String(totalPriceCart));
  }

  return (
    <BodyWrap>
      <Container>
        <h3>GIỎ HÀNG</h3>
        <div className={classes.wrap}>
          <div className={classes["list-items"]}>
            <Card className={classes.header}>
              <span>Tất cả ({items.length} sản phẩm)</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </Card>
            <Card className={classes.items}>{itemsListElement}</Card>
          </div>
          <UserPayment totalPriceCart={totalPriceCart} user={data}/>
        </div>
      </Container>
    </BodyWrap>
  );
};

export default Cart;
