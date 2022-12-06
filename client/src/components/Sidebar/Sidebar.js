import classes from "./Sidebar.module.css";
import SidebarHome from "./SidebarHome/SidebarHome";
import c from "./SidebarHome/SidebarHome";

const Sidebar = (props) => {
  const usingHome = true;
  return <div className={classes.sidebar}>
    {usingHome && <SidebarHome/>}
  </div>;
};

export default Sidebar;
