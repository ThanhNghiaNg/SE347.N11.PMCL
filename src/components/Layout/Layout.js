// import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Container from "../UI/Container";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  );
};

export default Layout;
