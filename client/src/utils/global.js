export const hostURL = "http://localhost:5000";
export const addDotStyle = (str) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
};
export const orderStatus = [
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

export const hasNumber = (myString) => {
  return /\d/.test(myString);
};
