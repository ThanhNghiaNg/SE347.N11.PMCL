import { useRef, useState } from "react";
import { hostURL } from "../../utils/global";
import classes from "./Order.module.css";

const Order = (props) => {
  const [edit, setEdit] = useState(false);
  const statusRef = useRef();
  const detailRef = useRef();
  const order = props.order;

  const books = order.books.map((book) => {
    return (
      <div className={classes.item}>
        <p>Tên sản phẩm: {book.bookId.title}</p>
        <p>Giá: {book.bookId.price}</p>
        <p>Số lượng: {book.quantity}</p>
      </div>
    );
  });
  const date = order.status.date.split("T")[0].split("-").reverse().join("-");

  const editHandler = (event) => {
    event.preventDefault();
    if (edit) {
      const postUpdateOrder = async () => {
        const resopne = await fetch(`${hostURL}/admin/update-order`, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: order._id,
            status: statusRef.current.value,
            detail: detailRef.current.value,
          }),
        });
        const data = await resopne.json();
        console.log(data);
        props.onRefresh((prev) => !prev);
      };
      postUpdateOrder();
    } else {
    }
    setEdit((prev) => !prev);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    const postDeleteOrder = async () => {
      const respone = await fetch(`${hostURL}/admin/delete-order`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: order._id }),
      });
      const data = await respone.json();
      console.log(data);
      props.onRefresh((prev) => !prev);
    };
    postDeleteOrder();
  };
  return (
    <div className={classes.order}>
      <h4>ID: #{order._id}</h4>
      {books}

      <div className={classes.detail}>
        <div className={classes.status}>
          <div className={classes["info-item"]}>
            <p>Tổng giá trị:</p>
            <p>{order.totalPrice}</p>
          </div>

          <div className={classes["info-item"]}>
            <p>Ngày đặt: </p>
            <p>{date}</p>
          </div>
          <div className={`${classes["info-item"]} ${classes["input-status"]}`}>
            <p>Trạng thái:</p>
            {!edit && <p>{order.status.status}</p>}
            {edit && (
              <input defaultValue={order.status.status} ref={statusRef}></input>
            )}
          </div>
          <div className={`${classes["info-item"]} ${classes["input-status"]}`}>
            <p>Mô tả:</p>
            {!edit && <p>{order.status.detail}</p>}
            {edit && (
              <input defaultValue={order.status.detail} ref={detailRef}></input>
            )}
          </div>
        </div>
        <div className={classes.user}>
          <div className={classes["info-item"]}>
            <p>ID:</p>
            <p>{order.user._id}</p>
          </div>
          <div className={classes["info-item"]}>
            <p>Email:</p>
            <p>{order.user.email}</p>
          </div>
        </div>
        <div className={classes["actions-control"]}>
          <button className="btn bg-success text-white" onClick={editHandler}>
            {edit ? "Cập nhật" : "Chỉnh sửa"}
          </button>
          <button className="btn bg-danger text-white" onClick={deleteHandler}>
            Xoá đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
