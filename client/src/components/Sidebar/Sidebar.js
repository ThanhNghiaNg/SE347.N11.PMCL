import classes from "./Sidebar.module.css";
import SidebarHome from "./SidebarHome/SidebarHome";
import SidebarCustomner from "./SidebarCustomer/SidebarCustomer";
import React from "react";

const Sidebar = (props) => {
  const useCustomer = props.useCustomer;
  return (
    <React.Fragment>
      {useCustomer && <SidebarCustomner />}
      {!useCustomer && <SidebarHome />}
    </React.Fragment>
  );
};

export default Sidebar;
