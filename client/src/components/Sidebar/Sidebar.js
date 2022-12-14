import classes from "./Sidebar.module.css";
import SidebarHome from "./SidebarHome/SidebarHome";
import React from "react";

const Sidebar = (props) => {
  const usingHome = true;
  return <React.Fragment>{usingHome && <SidebarHome />}</React.Fragment>;
};

export default Sidebar;
