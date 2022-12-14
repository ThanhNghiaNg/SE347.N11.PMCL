import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import ModalForm from "./components/ModalForm/ModalForm";
const App = () => {
  return (
    <Layout>
      <ModalForm />
      <Home />
    </Layout>
  );
};

export default App;
