import { NavLink } from "react-router-dom";

import { addDotStyle, orderStatus } from "../../../../../utils/global";

import classes from "./OrderDetail.module.css";

const OrderDetail = (props) => {
  const order = props.order;
  return (
    <div className={classes["order-detail"]}>
      <div className={classes["order-detail__heading"]}>
        <span>Chi tiết đơn hàng #{order._id}</span>
        <span className={classes["split"]}>-</span>
        <span className={classes["status"]}>
          {
            orderStatus.filter(
              (statusItem) => statusItem.code === order.status.status
            )[0].status
          }
        </span>
      </div>
      <div className={classes["order-detail__created-date"]}>
        {`Ngày đặt hàng: ${new Date(order.status.date).getHours()}:${new Date(
          order.status.date
        ).getMinutes()} ${new Date(order.status.date).getDate()}/${new Date(
          order.status.date
        ).getMonth()}/${new Date(order.status.date).getFullYear()}`}
      </div>
      <div className={classes["order-detail__information"]}>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>ĐỊA CHỈ NGƯỜI NHẬN</div>
          <div className={classes["content"]}>
            <p className={classes["name"]}>{order.user.name}</p>
            <p className={classes["address"]}>
              <span>Địa chỉ: </span>
              {order.user.address}
            </p>
            <p className={classes["phone"]}>
              <span>Điện thoại: </span>
              {order.user.phone}
            </p>
          </div>
        </div>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>HÌNH THỨC GIAO HÀNG</div>
          <div className={classes["content"]}>
            <p className={classes["delivery"]}>
              {order.payment.deliveryService}
            </p>
          </div>
        </div>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>HÌNH THỨC THANH TOÁN</div>
          <div className={classes["content"]}>
            <div className={classes["payments"]}>
              {order.payment.paymentMethod}
            </div>
          </div>
        </div>
      </div>
      <table className={classes["order-detail__product-list"]}>
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tạm tính</th>
          </tr>
        </thead>
        <tbody>
          {order.books.map((book) => {
            const product = book.bookId;
            console.log(`----id: ${product._id}`);
            return (
              <tr>
                <td>
                  <div className={classes["product-item"]}>
                    <img src={product.images[0].url} />
                    <div className={classes["product-info"]}>
                      <NavLink
                        className={classes["product-name"]}
                        to={`/detail/${product._id}`}
                      >
                        {product.title}
                      </NavLink>
                      <div className={classes["product-publisher"]}>
                        Sản xuất bởi {product.publisher}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes["price"]}>
                  {addDotStyle(String(product.price))}
                </td>
                <td className={classes["quantity"]}>{book.quantity}</td>
                <td className={classes["raw-total"]}>
                  {addDotStyle(String(product.price * book.quantity))}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <span>Tạm tính</span>
            </td>
            <td>{addDotStyle(String(order.totalPrice))}</td>
          </tr>
          <tr>
            <td colSpan="3">
              <span>Phí vận chuyển</span>
            </td>
            <td>{addDotStyle(String(0))}</td>
          </tr>
          <tr>
            <td colSpan="3">
              <span>Tổng cộng</span>
            </td>
            <td
              style={{ color: "rgb(255, 59, 39)", fontSize: "18px" }}
              className={classes["sum"]}
            >
              {addDotStyle(
                String(
                  order.fee ? order.fee + order.totalPrice : order.totalPrice
                )
              )}
            </td>
          </tr>
        </tfoot>
      </table>
      <NavLink
        to="/customer/orderManagement"
        className={classes["view-order-list"]}
      >
        &#x2190; Quay lại đơn hàng của tôi
      </NavLink>
    </div>
  );
};

export default OrderDetail;
