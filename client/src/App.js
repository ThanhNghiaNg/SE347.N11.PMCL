import "./App.css";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Layout from "./components/Layout/Layout";

import ModalForm from "./components/ModalForm/ModalForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./components/Cart/Cart";
import Checkout from "./pages/Checkout";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import { CLOSE } from "./store/popup";
import Order from "./pages/Order";
import Popup from "./components/Popup/Popup";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const statusPopup = useSelector((state) => state.popup.status);
  console.log(statusPopup);
  window.addEventListener("load", () => {
    dispatch(authActions.clearSession());
  });
  return (
    <BrowserRouter>
      {statusPopup !== CLOSE && <Popup />}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          {isLoggedIn && (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/customer/:id" element={<Customer />} />
              <Route path="/order/:id/" element={<Order />} />
              <Route path="/*" element={<p>Page not found</p>} />
            </>
          )}
          {!isLoggedIn && <>
            <Route path="/*" element={<ModalForm/>}/>
          </>}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
