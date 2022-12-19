import { useSelector } from "react-redux";

import AccountInfo from "./AccountInfo/AccountInfo";
import PasswordManagement from "./PasswordMangement/PasswordManagement";
import ProductReviews from "./ProductReviews/ProductReviews";
import OrderManagement from "./OrderManagement/OrderManagement";

import classes from "./ContentCustomers.module.css";

const navItems = [
  {
    id: "userInformation",
    component: <AccountInfo />,
  },
  {
    id: "passwordChange",
    component: <PasswordManagement />,
  },
  {
    id: "orderManagement",
    component: <OrderManagement />,
  },
  {
    id: "productReviews",
    component: <ProductReviews />,
  },
];

const ContentCustomers = (props) => {
  const currentState = useSelector((state) => state.navigation.selectedNav);
  return (
    <div>
      {navItems.filter((item) => item.id === currentState)[0].component}
    </div>
  );
};

export default ContentCustomers;
