// import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../UI/Container";
import BodyWrap from "../UI/BodyWrap";

const Layout = (props) => {
  return (
    <>
      <Header />
      <BodyWrap>{props.children}</BodyWrap>
      <Footer />
    </>
  );
};

export default Layout;
