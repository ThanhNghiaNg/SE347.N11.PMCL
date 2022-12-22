import { Link } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./Header.module.css";
import authContext from "../../store/authContext";
import modalContext from '../../store/modalContext'
import { useContext } from "react";
import { hostURL } from "../../utils/global";

const Header = (props) => {
  const authCtx = useContext(authContext);
  const modalCtx = useContext(modalContext)

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
    modalCtx.showConfirm(`Bấm "Xác nhận" để đăng xuất`, postLogout)
  };

  return (
    <Container className={classes.header}>
      <nav className={classes.nav}>
        {authCtx.isLoggedIn && (
          <ul className={classes["nav-items"]}>
            <li>
              <Link to="/">Tất cả sách</Link>
            </li>
            <li>
              <Link to="/add-book">Thêm sách</Link>
            </li>
            <li>
              <Link to="/orders">Đơn hàng</Link>
            </li>
          </ul>
        )}
        <ul className={classes["nav-items"]}>
          {!authCtx.isLoggedIn && (
            <>
              <li>
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li>
                <Link to="/register">Đăng Ký</Link>
              </li>
            </>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link onClick={logoutHandler}>Đăng xuất</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
