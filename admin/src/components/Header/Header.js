import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes["nav-items"]}>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/add-book">Add book</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
        <ul className={classes["nav-items"]}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
