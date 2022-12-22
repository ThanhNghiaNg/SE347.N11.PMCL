import OrderStatusTab from "./OrderStatusTab/OrderStatusTab";
import OrderSearch from "./OrderSearch/OrderSearch";
import OrderList from "./OrderList/OrderList";
import OrderDetail from "./OrderDetail/OrderDetail";

import classes from "./OrderManagement.module.css";
import React, { useEffect, useState } from "react";
import { hostURL } from "../../../../utils/global";

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
  const [orders, setOrders] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [isShowOrderDetail, setIsShowOrderDetail] = useState(false);
  const [customerData, setcustomerData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const refreshHandler = () => {
    setToggleRefresh((prev) => !prev);
  };
  useEffect(() => {
    const getOrders = async () => {
      const respone = await fetch(`${hostURL}/user/ordered`, {
        credentials: "include",
      });
      const data = await respone.json();
      console.log(data)
      const fetchedOrder = data.map((order) => {
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
      });
      console.log(fetchedOrder);
      setOrders(fetchedOrder);
    };
    getOrders();
  }, [toggleRefresh]);

  useEffect(() => {
    const getCustomerData = async () => {
      const respone = await fetch(`${hostURL}/user/update`, {
        credentials: "include",
      });
      const data = await respone.json();
      setcustomerData({
        fullName: data.name ? data.name : "",
        phoneNumber: data.phone ? data.phone : "",
        address: data.address ? data.address : "",
      });
    };
    getCustomerData();
  }, []);

  // const orders = [
  //   {
  //     id: 0,
  //     status: "paying",
  //     amount: 207000,
  //     products: [
  //       {
  //         id: 0,
  //         title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
  //         price: 69000,
  //         publisher: "Nhà sách Fahasa",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
  //         amount: 2,
  //       },
  //       {
  //         id: 1,
  //         title: "Nhà giả kim",
  //         price: 69000,
  //         publisher: "AHABOOKS",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
  //         amount: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     status: "pending",
  //     amount: 250000,
  //     products: [
  //       {
  //         id: 2,
  //         title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
  //         price: 112000,
  //         publisher: "Nhà sách Fahasa",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
  //         amount: 1,
  //       },
  //       {
  //         id: 1,
  //         title: "Nhà giả kim",
  //         price: 69000,
  //         publisher: "AHABOOKS",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
  //         amount: 2,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     status: "shipping",
  //     amount: 224000,
  //     products: [
  //       {
  //         id: 2,
  //         title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
  //         price: 112000,
  //         publisher: "Nhà sách Fahasa",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
  //         amount: 2,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     status: "shipped",
  //     amount: 69000,
  //     products: [
  //       {
  //         id: 0,
  //         title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
  //         price: 69000,
  //         publisher: "Nhà sách Fahasa",
  //         image:
  //           "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
  //         amount: 1,
  //       },
  //     ],
  //   },
  // ];

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
      order.products.some((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }

  const orderDetail = {
    id: "63a2dfdca6ddc143ffc68805",
    status: "shipped",
    date: "2022-12-21T10:28:44.561Z",
    amount: 124000,
    products: [
      {
        id: "6399766ca229a95b88196af8",
        image:
          "https://salt.tikicdn.com/media/catalog/producttmp/61/50/87/4beea7729fb70b30fd09a6acbae51103.jpg",
        price: 124000,
        publisher: "KNBooks",
        title: "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
        amount: 1,
      },
      {
        id: "6399768fa229a95b88196c17",
        image:
          "https://salt.tikicdn.com/ts/product/5f/b2/f6/a4a78fa65bcdb701ac4b9e8f8e63ef46.jpg",
        price: 149000,
        publisher: "Aladanh",
        title: "Sách ID Tiếng ANh cho người mới bắt đầu- Cô Trang Anh",
        amount: 3,
      },
    ],
  };

  return (
    <div className={classes["order-management"]}>
      <OrderDetail
        order={orderDetail}
        customerData={customerData}
        orderStatus={orderStatus}
      />
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
