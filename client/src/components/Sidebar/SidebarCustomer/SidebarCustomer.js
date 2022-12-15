import AccountAvatar from "./AccountAvatar/AccountAvatar";
import AccountNavigation from "./AccountNavigation/AccountNavigation";

import classes from "./SidebarCustomer.module.css";

const SidebarCustomner = (props) => {
  return (
    <div className={classes["sidebar"]}>
      <AccountAvatar />
      <AccountNavigation />
    </div>
  );
};

export default SidebarCustomner;
