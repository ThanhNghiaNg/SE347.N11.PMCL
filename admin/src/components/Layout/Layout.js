import Header from "../Header/Header";
import Container from "../UI/Container";
const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
