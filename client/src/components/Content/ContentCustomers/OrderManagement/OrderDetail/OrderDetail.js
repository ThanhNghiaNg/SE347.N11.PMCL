import { NavLink } from "react-router-dom";

import { addDotStyle } from "../../../../../utils/global";

import classes from "./OrderDetail.module.css";

const OrderDetail = (props) => {
  return (
    <div className={classes["order-detail"]}>
      <div className={classes["order-detail__heading"]}>
        <span>Chi tiết đơn hàng #{props.order.id}</span>
        <span className={classes["split"]}>-</span>
        <span className={classes["status"]}>
          {
            props.orderStatus.filter(
              (statusItem) => statusItem.code === props.order.status
            )[0].status
          }
        </span>
      </div>
      <div className={classes["order-detail__created-date"]}>
        {`Ngày đặt hàng: ${new Date(props.order.date).getHours()}:${new Date(
          props.order.date
        ).getMinutes()} ${new Date(props.order.date).getDate()}/${new Date(
          props.order.date
        ).getMonth()}/${new Date(props.order.date).getFullYear()}`}
      </div>
      <div className={classes["order-detail__information"]}>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>ĐỊA CHỈ NGƯỜI NHẬN</div>
          <div className={classes["content"]}>
            <p className={classes["name"]}>{props.customerData.fullName}</p>
            <p className={classes["address"]}>
              <span>Địa chỉ: </span>
              {props.customerData.address}
            </p>
            <p className={classes["phone"]}>
              <span>Điện thoại: </span>
              {props.customerData.phoneNumber}
            </p>
          </div>
        </div>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>HÌNH THỨC GIAO HÀNG</div>
          <div className={classes["content"]}>
            <p className={classes["delivery"]}>Giao hàng nhanh</p>
          </div>
        </div>
        <div className={classes["information-item"]}>
          <div className={classes["title"]}>HÌNH THỨC THANH TOÁN</div>
          <div className={classes["content"]}>
            <div className={classes["payments"]}>
              Thanh toán tiền mặt khi nhận hàng
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
          {props.order.products.map((product) => (
            <tr>
              <td>
                <div className={classes["product-item"]}>
                  <img src={product.image} />
                  <div className={classes["product-info"]}>
                    <NavLink
                      className={classes["product-name"]}
                      to={`/detail/${product.id}`}
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
              <td className={classes["quantity"]}>{product.amount}</td>
              <td className={classes["raw-total"]}>
                {addDotStyle(String(product.price * product.amount))}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <span>Tạm tính</span>
            </td>
            <td>
              {addDotStyle(
                String(
                  props.order.products.reduce(
                    (rawTotal, product) =>
                      rawTotal + product.amount * product.price,
                    0
                  )
                )
              )}
            </td>
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
                  props.order.fee
                    ? props.order.products.reduce(
                        (rawTotal, product) =>
                          rawTotal + product.amount * product.price,
                        0
                      ) + props.order.fee
                    : props.order.products.reduce(
                        (rawTotal, product) =>
                          rawTotal + product.amount * product.price,
                        0
                      )
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
