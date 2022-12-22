import classes from "./UserPayment.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";

const UserPayment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const isCheckout = props.checkout;
  const checkoutButton = props.checkoutButton;
  const totalPriceCart = props.totalPriceCart ? props.totalPriceCart : 0;

  useEffect(() => {
    const getUserInfor = async () => {
      const respone = await fetch(`${hostURL}/user/update`, {
        credentials: "include",
      });

      const data = await respone.json();
      setUser(data);
    };
    getUserInfor();
  }, []);

  const orderHandler = (event) => {
    event.preventDefault();
    if (totalPriceCart === 0) {
      dispatch(
        popupActions.showError(
          "Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy tiếp tục mua sắm!"
        )
      );
      navigate("/");
      return;
    }
    if (!user.name || !user.phone || !user.address) {
      dispatch(
        popupActions.showError("Hãy cập nhật đầy đủ thông tin liên lạc!")
      );
      navigate("/customer/userInformation");
      return
    }
    navigate("/checkout");
  };

  return (
    <div>
      <Card className={`${classes.address} mb-3`}>
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary">Giao tới</h5>
          <Link to="/customer/userInformation" className="text-decoration-none">
            Thay đổi
          </Link>
        </div>
        <div className="d-flex justify-content-between fw-bold my-2">
          <span>{user.name}</span> <span className="text-muted">|</span>{" "}
          <span>{user.phone}</span>
        </div>
        <div>
          <span>Địa chỉ: {user.address}</span>
        </div>
      </Card>
      <Card className={classes.user}>
        <div className="d-flex justify-content-between border-bottom">
          <span>Tạm tính</span>
          <span>{totalPriceCart}</span>
        </div>
        <div className="d-flex justify-content-between border-bottom fs-5">
          <span>Tổng tiền</span>
          <span className="text-danger fs-4">{totalPriceCart}</span>
        </div>
        {!isCheckout && (
          <button className="btn btn-danger" onClick={orderHandler}>
            Đặt hàng
          </button>
        )}
        {isCheckout && checkoutButton}
      </Card>
    </div>
  );
};

export default UserPayment;
