import classes from "./UserPayment.module.css";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

const UserPayment = (props) => {
  const isCheckout = props.checkout
  const checkoutButton = props.checkoutButton
  const totalPriceCart = props.totalPriceCart ? props.totalPriceCart : 0;
  
  return (
    <Card className={classes.user}>
      <div className="d-flex justify-content-between border-bottom">
        <span>Tạm tính</span>
        <span>{totalPriceCart}</span>
      </div>
      <div className="d-flex justify-content-between border-bottom fs-5">
        <span>Tổng tiền</span>
        <span className="text-danger fs-4">{totalPriceCart}</span>
      </div>
      {!isCheckout && <Link to="/checkout" className="btn btn-danger">
        Đặt hàng
      </Link>}
      {isCheckout && checkoutButton}
    </Card>
  );
};

export default UserPayment;
