import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import OrderList from "./components/OderList/OrderList";
import AuthForm from "./components/AuthForm/AuthForm";

import authContext from "./store/authContext";
import { useContext } from "react";

function App() {
  const authCtx = useContext(authContext);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {authCtx.isLoggedIn && (
            <>
              <Route path="/" element={<BookList />} />
              <Route path="/edit/:id" element={<BookForm edit={true} />} />
              <Route path="/add-book" element={<BookForm edit={false} />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/*" element={<h1>Page Not Found.</h1>} />
            </>
          )}
          {!authCtx.isLoggedIn && (
            <>
              <Route path="/login" element={<AuthForm isLogin={true} />} />
              <Route path="/register" element={<AuthForm isLogin={false} />} />
              <Route path="/*" element={<AuthForm isLogin={true} />} />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
