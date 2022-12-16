import { Link } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Container className={classes.header}>
      <nav class={classes.nav}>
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
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
