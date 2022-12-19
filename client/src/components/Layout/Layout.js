// import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../UI/Container";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
