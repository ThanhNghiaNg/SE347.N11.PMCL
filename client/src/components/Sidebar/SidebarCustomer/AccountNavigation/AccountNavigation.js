import { useState } from "react";

import classes from "./AccountNavigation.module.css";

const navItems = [
  {
    id: "i0",
    text: "Thông tin tài khoản",
    svgIcon:
      "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    id: "i1",
    text: "Quản lý đơn hàng",
    svgIcon:
      "M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z",
  },
  {
    id: "i2",
    text: "Sổ địa chỉ",
    svgIcon:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
  {
    id: "i3",
    text: "Đánh giá sản phẩm",
    svgIcon:
      "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
  },
];

const AccountNavigation = (props) => {
  const [checked, setChecked] = useState("i0");

  return (
    <ul className={classes["account-navigation"]}>
      {navItems.map((item) => (
        <li key={item.id}>
          <div
            className={`${classes["account-navigation__item"]} ${
              checked === item.id ? classes["active"] : ""
            }`}
            onClick={() => setChecked(item.id)}
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
