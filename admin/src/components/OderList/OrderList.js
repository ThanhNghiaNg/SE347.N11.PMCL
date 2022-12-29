import { useEffect, useRef, useState } from "react";
import { hostURL } from "../../utils/global";
import Order from "./Order";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
  const [data, setData] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const queryRef = useRef();

  useEffect(() => {
    document.title = "Admin Orders Management"
    const getAllOrders = async () => {
      try {
        const respone = await fetch(`${hostURL}/admin/orders?query=${query}`, {
          credentials: "include",
        });
        console.log(respone);
        const data = await respone.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, [toggleRefresh, query]);

  const searchHandler = (event) => {
    event.preventDefault();
    setQuery(queryRef.current.value);
  };
  const searchAllhandler = (event) => {
    event.preventDefault();
    queryRef.current.value = "";
    setQuery("");
  };

  let orderContent = <p>Không có đơn hàng.</p>;

  if (data.length <= 0 && !!query) {
    orderContent = <p>Không tìm thấy đơn hàng.</p>;
  }

  if (data.length > 0) {
    orderContent = data.map((order) => {
      return (
        <Order key={order._id} order={order} onRefresh={setToggleRefresh} />
      );
    });
  }
  return (
    <div className={classes["order-list"]}>
      <form className={classes["search-form"]}>
        <input
          placeholder="Tìm đơn hàng theo Id đơn hàng, Id người dùng, Email người dùng, Id sách, tên sách"
          ref={queryRef}
        ></input>
        <button onClick={searchHandler} className={`btn bg-primary text-white`}>
          Tìm kiếm
        </button>
        <button
          onClick={searchAllhandler}
          className={`btn bg-secondary text-white`}
        >
          Tất Cả Đơn
        </button>
      </form>
      <div>{orderContent}</div>
    </div>
  );
};

export default OrderList;
