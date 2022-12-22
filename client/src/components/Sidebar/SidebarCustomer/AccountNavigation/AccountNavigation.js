import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { navigationActions } from "../../../../store/UserNavigationBar";

import classes from "./AccountNavigation.module.css";

const navItems = [
  {
    id: "userInformation",
    text: "Thông tin tài khoản",
    svgIcon:
      "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    id: "passwordChange",
    text: "Đổi mật khẩu",
    svgIcon:
      "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    id: "orderManagement",
    text: "Quản lý đơn hàng",
    svgIcon:
      "M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z",
  },
  {
    id: "productReviews",
    text: "Đánh giá sản phẩm",
    svgIcon:
      "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
  },
];

const AccountNavigation = (props) => {
  const navigate = useNavigate()
  const currentState = useSelector((state) => state.navigation.selectedNav);

  const clickHandler = (navID) => {
    navigate(`/customer/${navID}`)
  };

  return (
    <ul className={classes["account-navigation"]}>
      {navItems.map((item) => (
        <li key={item.id}>
          <div
            className={`${classes["account-navigation__item"]} ${
              currentState === item.id ? classes["active"] : ""
            }`}
            onClick={() => clickHandler(item.id)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stokewidth="0"
              viewBox="0 0 24 24"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={item.svgIcon}></path>
            </svg>
            <span>{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccountNavigation;
