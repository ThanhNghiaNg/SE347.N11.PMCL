import OrderStatusTab from "./OrderStatusTab/OrderStatusTab";
import OrderSearch from "./OrderSearch/OrderSearch";
import OrderList from "./OrderList/OrderList";

import classes from "./OrderManagement.module.css";
import { useState } from "react";

const orderStatus = [
  {
    id: 0,
    code: "all",
    category: "Tất cả đơn",
    status: "",
  },
  {
    id: 1,
    code: "paying",
    category: "Chờ thanh toán",
    status: "Chờ xác nhận",
  },
  {
    id: 2,
    code: "pending",
    category: "Đang xử lý",
    status: "Đang xử lý",
  },
  {
    id: 3,
    code: "shipping",
    category: "Đang giao hàng",
    status: "Đang giao hàng",
  },
  {
    id: 4,
    code: "shipped",
    category: "Đã giao",
    status: "Giao hàng thành công",
  },
];

const OrderManagement = (props) => {
  const orders = [
    {
      id: 0,
      status: "paying",
      amount: 207000,
      products: [
        {
          id: 0,
          title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
          price: 69000,
          publisher: "Nhà sách Fahasa",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
          amount: 2,
        },
        {
          id: 1,
          title: "Nhà giả kim",
          price: 69000,
          publisher: "AHABOOKS",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
          amount: 1,
        },
      ],
    },
    {
      id: 1,
      status: "pending",
      amount: 250000,
      products: [
        {
          id: 2,
          title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
          price: 112000,
          publisher: "Nhà sách Fahasa",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
          amount: 1,
        },
        {
          id: 1,
          title: "Nhà giả kim",
          price: 69000,
          publisher: "AHABOOKS",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
          amount: 2,
        },
      ],
    },
    {
      id: 2,
      status: "shipping",
      amount: 224000,
      products: [
        {
          id: 2,
          title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
          price: 112000,
          publisher: "Nhà sách Fahasa",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
          amount: 2,
        },
      ],
    },
    {
      id: 3,
      status: "shipped",
      amount: 69000,
      products: [
        {
          id: 0,
          title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
          price: 69000,
          publisher: "Nhà sách Fahasa",
          image:
            "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
          amount: 1,
        },
      ],
    },
  ];

  const [selectedStatus, setSelectedStatus] = useState("all");
  const setStatusCategory = (status) => {
    setSelectedStatus(status);
  };

  const [searchInput, setSearchInput] = useState("");
  const setSearchValue = (value) => {
    setSearchInput(value);
  };

  // Filter order via order category
  let filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);
  if (searchInput) {
    filteredOrders = filteredOrders.filter((order) =>
      order.products.some((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
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
      <OrderList orders={filteredOrders} orderStatus={orderStatus} />
    </div>
  );
};

export default OrderManagement;
