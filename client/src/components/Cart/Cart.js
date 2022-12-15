import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
import { Link } from "react-router-dom";
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
    <div>
      <p>Cart</p>
      <Link to='/checkout'>Đặt hàng</Link>
    </div>
  );
};

export default Cart;
