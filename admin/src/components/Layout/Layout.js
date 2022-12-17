import Header from "../Header/Header";
import Container from "../UI/Container";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
