import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
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

  const orderHandler = (event)=>{
    event.preventDefault();
    
  }

  return (
    <div>
      <p>Cart</p>
      <button onClick={orderHandler}>Đặt hàng</button>
    </div>
  );
};

export default Cart;
