import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [items, setItems] = useState();
  useEffect(() => {
    const getCart = async () => {
      const respone = await fetch(`${hostURL}/cart`, {
        credentials: "include",
      });
      const data = await respone.json();
      console.log(data);
      setItems(data);
    };
    getCart();
  }, []);

  return (
    <Container>
      <h3>GIỎ HÀNG</h3>

      <div className={classes.wrap}>
        <div className={classes["list-items"]}>
          <Card className={classes.header}>
            <span>Tất cả (X sản phẩm)</span>
            <span>Đơn giá</span>
            <span>Số lượng</span>
            <span>Thành tiền</span>
          </Card>
          <Card className={classes.items}>Items</Card>
        </div>

        <Card className={classes.user}>
          User
          <Link to="/checkout">Đặt hàng</Link>
        </Card>
      </div>
    </Container>
  );
};

export default Cart;
