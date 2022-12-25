import classes from "./Header.module.css";
import Container from "../UI/Container";
import { useEffect, useRef, useState } from "react";
import { productActions } from "../../store/products";
import { errorsActions } from "../../store/errors";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ModalFormPortals } from "../ModalForm/ModalForm";
import { authActions } from "../../store/auth";
import { hostURL } from "../../utils/global";
import logo from "../../assets/logo/newLogo.png";

const Header = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const numberProductCart = useSelector(
    (state) => state.products.numberProductCart
  );
  const quantityProductCart = useSelector(
    (state) => state.products.quantityProductCart
  );
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isShowModal, setIsShowModal] = useState(false);
  const [toggleBump, setToggleBump] = useState(false);
  const searchInput = useRef();

  useEffect(() => {
    const getCart = async () => {
      const respone = await fetch(`${hostURL}/cart`, {
        credentials: "include",
      });
      const data = await respone.json();
      dispatch(productActions.setNumberProductCart(data.cart.items.length));
      dispatch(
        productActions.setQuantityProductCart(
          data.cart.items.reduce((acc, item) => {
            return item.quantity + acc;
          }, 0)
        )
      );
    };
    getCart();

    setToggleBump(true);

    setTimeout(() => {
      setToggleBump(false);
    }, 300);
  }, [quantityProductCart]);

  const searchHandler = (event) => {
    event.preventDefault();
    const searchEntered = searchInput.current.value;
    const result = allProducts.filter((book) =>
      book.title.toLowerCase().includes(searchEntered.toLowerCase())
    );
    dispatch(productActions.setCurrentProducts(result));
    if (result.length > 0) {
      dispatch(errorsActions.setSuccessFound());
    } else {
      dispatch(errorsActions.setNotFound());
    }
  };

  const logoutHandler = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((respone) => {
        console.log(respone);
        return respone.json();
      })
      .then((data) => {
        dispatch(authActions.logout());
        console.log(data);
      });
  };

  const showModalFormHandler = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      setIsShowModal(true);
    }
  };

  const hideModalFormHandler = (event) => {
    try {
      event.preventDefault();
    } catch (err) {
      console.log(err);
    }
    setIsShowModal(false);
  };

  return (
    <Container className={classes["main-header"]}>
      {isShowModal && <ModalFormPortals onCloseModal={hideModalFormHandler} />}
      <div className={classes["header-container"]}>
        <div className={`${classes["header-wrapper"]} ${classes.edlkEo}`}>
          <div className={classes["left-container"]}>
            <div className={classes["logo-menu"]}>
              <div className={classes["style-LogoMenu"]}>
                <Link to="/" className={classes["tiki-logo"]}>
                  {/* <img src={logo} alt="owwi watcher book store logo" /> */}
                  <i class="fa-solid fa-paw fs-1 text-white"></i>
                </Link>
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
            <div
              className={classes["UserStyle-LoginItem"]}
              onClick={showModalFormHandler}
            >
              <img
                src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                alt=""
                className={classes["profile-icon"]}
              ></img>
              <span className={classes["UserStyle-LoginItem-ItemText"]}>
                {!isLoggedIn && (
                  <span className={classes["login-text"]}>
                    Đăng Nhập / Đăng Ký
                  </span>
                )}

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

              {isLoggedIn && (
                <div className={classes["UserStyle__UserDropDown"]}>
                  <NavLink to="/customer/userInformation">
                    <p
                      className={classes["dropdown-item"]}
                      title="Tài khoản của tôi"
                    >
                      Tài khoản của tôi
                    </p>
                  </NavLink>
                  <NavLink to="/customer/passwordChange">
                    <p
                      className={classes["dropdown-item"]}
                      title="Đổi mật khẩu"
                    >
                      Đổi mật khẩu
                    </p>
                  </NavLink>
                  <NavLink to="/customer/orderManagement">
                    <p
                      className={classes["dropdown-item"]}
                      title="Đơn hàng của tôi"
                    >
                      Đơn hàng của tôi
                    </p>
                  </NavLink>
                  <NavLink to="/customer/productReviews">
                    <p
                      className={classes["dropdown-item"]}
                      title="Đánh giá sản phẩm"
                    >
                      Đánh giá sản phẩm
                    </p>
                  </NavLink>
                  <NavLink to="/" onClick={logoutHandler}>
                    <p
                      className={classes["dropdown-item"]}
                      title="Thoát tài khoản"
                    >
                      Thoát tài khoản
                    </p>
                  </NavLink>
                </div>
              )}
            </div>
            <div className={classes["UserStyle-CartItem"]}>
              <Link to="/cart">
                <div
                  className={`${classes["UserStyle-CartItemInner"]} ${
                    toggleBump ? classes.bump : ""
                  }`}
                >
                  <div className={classes["cart-wrapper"]}>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                      width="32px"
                      height="32px"
                      alt=""
                      className={classes["cart-icon"]}
                    ></img>
                    <span className={classes["UserStyle-CartItemCount"]}>
                      {numberProductCart}
                    </span>
                  </div>
                  <span className={classes["cart-text"]}>Giỏ Hàng</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
