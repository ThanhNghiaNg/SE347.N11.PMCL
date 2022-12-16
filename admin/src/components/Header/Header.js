import { Link } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./Header.module.css";
import authContext from "../../store/authContext";
import { useContext } from "react";
import { hostURL } from "../../utils/global";

const Header = (props) => {
  const authCtx = useContext(authContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    const postLogout = async()=>{
      const respone = await fetch(`${hostURL}/admin-logout`,{
        credentials: "include",
        method: "POST",
      })
      if (respone.status === 200){
        authCtx.logout()
      }
    }
    postLogout()
  };

  return (
    <Container className={classes.header}>
      <nav className={classes.nav}>
        {authCtx.isLoggedIn && (
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
        )}
        <ul className={classes["nav-items"]}>
          {!authCtx.isLoggedIn && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link onClick={logoutHandler}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
