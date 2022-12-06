import classes from "./Header.module.css";
import Container from "../UI/Container";
import { useRef } from "react";
import { productActions } from "../../store/products";
import { errorsActions } from "../../store/errors";
import { useDispatch, useSelector } from "react-redux";
const Header = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const searchInput = useRef();
  const searchHandler = (event) => {
    event.preventDefault();
    const searchEntered = searchInput.current.value;
    const result = allProducts.filter((book) =>
      book.name.toLowerCase().includes(searchEntered.toLowerCase())
    );
    console.log(result);
    dispatch(productActions.setCurrentProducts(result));
    if (result.length > 0) {
      dispatch(errorsActions.setSuccessFound());
    } else {
      dispatch(errorsActions.setNotFound());
    }
  };
  return (
    <Container className={classes["main-header"]}>
      <div className={classes["header-container"]}>
        <div className={`${classes["header-wrapper"]} ${classes.edlkEo}`}>
          <div className={classes["left-container"]}>
            <div className={classes["logo-menu"]}>
              <div className={classes["style-LogoMenu"]}>
                <a href="/" className={classes["tiki-logo"]}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                    alt="owwi watcher book store logo"
                  />
                </a>
              </div>
            </div>
            <div className={classes["form-search"]}>
              <div className={classes["FormSearch-Root"]}>
                <input
                  type="text"
                  placeholder="Tìm sách theo tên"
                  className={classes["FormSearh-Input"]}
                  ref={searchInput}
                ></input>
                <button
                  className={classes["FormSearch-Button"]}
                  onClick={searchHandler}
                >
                  <img
                    src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                    alt="search-icon"
                    className={classes["icon-search"]}
                  ></img>
                  Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
          <div className={classes["user-style"]}>
            <div className={classes["UserStyle-LoginItem"]}>
              <img
                src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                alt=""
                className={classes["profile-icon"]}
              ></img>
              <span className={classes["UserStyle-LoginItem-ItemText"]}>
                <span className={classes["login-text"]}>
                  Đăng Nhập / Đăng Ký
                </span>
                <span className={classes["account-label"]}>
                  <span>Tài khoản</span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                    width="16px"
                    height="16px"
                    alt=""
                    className={classes["arrow-icon"]}
                  ></img>
                </span>
              </span>
            </div>
            <div className={classes["UserStyle-CartItem"]}>
              <a href="#">
                <div className={classes["UserStyle-CartItemInner"]}>
                  <div className={classes["cart-wrapper"]}>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                      width="32px"
                      height="32px"
                      alt=""
                      className={classes["cart-icon"]}
                    ></img>
                    <span className={classes["UserStyle-CartItemCount"]}>
                      0
                    </span>
                  </div>
                  <span className={classes["cart-text"]}>Giỏ Hàng</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
