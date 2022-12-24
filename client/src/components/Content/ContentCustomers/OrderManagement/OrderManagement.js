import OrderStatusTab from "./OrderStatusTab/OrderStatusTab";
import OrderSearch from "./OrderSearch/OrderSearch";
import OrderList from "./OrderList/OrderList";
import OrderDetail from "./OrderDetail/OrderDetail";

import classes from "./OrderManagement.module.css";
import React, { useEffect, useState } from "react";
import { hostURL, orderStatus } from "../../../../utils/global";

const OrderManagement = (props) => {
  const [orders, setOrders] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);

  const refreshHandler = () => {
    setToggleRefresh((prev) => !prev);
  };
  useEffect(() => {
    const getOrders = async () => {
      const respone = await fetch(`${hostURL}/user/ordered`, {
        credentials: "include",
      });
      const data = await respone.json();
      console.log(data);
      const fetchedOrder = data
        .map((order) => {
          return {
            id: order._id,
            status: order.status.status,
            date: order.status.date,
            amount: order.totalPrice,
            products: [
              ...order.books.map((book) => {
                return {
                  id: book.bookId._id,
                  title: book.bookId.title,
                  price: book.bookId.price,
                  amount: book.quantity,
                  publisher: book.bookId.publisher,
                  image: book.bookId.images[0].url,
                };
              }),
            ],
          };
        })
        .reverse();
      console.log(fetchedOrder);
      setOrders(fetchedOrder);
    };
    getOrders();
  }, [toggleRefresh]);

  const [selectedStatus, setSelectedStatus] = useState("all");
  const setStatusCategory = (status) => {
    setSelectedStatus(status);
  };

  const [searchInput, setSearchInput] = useState("");
  const setSearchValue = (value) => {
    setSearchInput(value);
  };

  // Filter order via order category
  let filteredOrders = [];
  if (orders.length > 0) {
    filteredOrders =
      selectedStatus === "all"
        ? orders
        : orders.filter((order) => order.status === selectedStatus);
  }
  if (searchInput) {
    filteredOrders = filteredOrders.filter((order) =>
      order.products.some(
        (product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          order.id.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }

  return (
    <div className={classes["order-management"]}>
      <div className={classes["order-management__heading"]}>
        Đơn hàng của tôi
      </div>
      <OrderStatusTab
        onSetStatusCategory={setStatusCategory}
        orderStatus={orderStatus}
      />
      <OrderSearch onSetSearchValue={setSearchValue} />
      {filteredOrders.length > 0 && (
        <OrderList
          orders={filteredOrders}
          orderStatus={orderStatus}
          onRefresh={refreshHandler}
        />
      )}
    </div>
  );
};

export default OrderManagement;
