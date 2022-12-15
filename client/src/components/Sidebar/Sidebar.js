import classes from "./Sidebar.module.css";
import SidebarHome from "./SidebarHome/SidebarHome";
import SidebarCustomner from "./SidebarCustomer/SidebarCustomer";
import React from "react";

const Sidebar = (props) => {
  const usingHome = true;
  return <React.Fragment>{usingHome && <SidebarCustomner />}</React.Fragment>;
};

export default Sidebar;
