import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/ModalForm/LoginForm/LoginForm";
import ModalForm from "./components/ModalForm/ModalForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <ModalForm />
    </Layout>
  );
};

export default App;
