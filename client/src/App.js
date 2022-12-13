import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import LoginForm from './components/ModalForm/LoginForm/LoginForm'
import ModalForm from './components/ModalForm/ModalForm'
const App = () => {
  return (
    <Layout>
      {/* <LoginForm/> */}
      <ModalForm/>
      <Home />
    </Layout>
  );
};

export default App;
