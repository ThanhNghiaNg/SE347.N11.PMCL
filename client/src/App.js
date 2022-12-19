import "./App.css";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Layout from "./components/Layout/Layout";

import LoginForm from "./components/ModalForm/LoginForm/LoginForm";
import ModalForm from "./components/ModalForm/ModalForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./components/Cart/Cart";
import Checkout from "./pages/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  window.addEventListener("load", () => {
    dispatch(authActions.clearSession());
  });
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          {isLoggedIn && (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/customer" element={<Customer />} />
            </>
          )}
          <Route path="/*" element={<p>Page not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
