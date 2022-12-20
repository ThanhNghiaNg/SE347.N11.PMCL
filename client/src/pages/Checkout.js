import Confirm from "../components/Confirm/Confirm";
import Container from "../components/UI/Container";
import BodyWrap from "../components/UI/BodyWrap";
const Checkout = (props) => {
  return (
    <BodyWrap>
      <Container>
        <h3>THANH TOÁN</h3>
        <Confirm />
      </Container>
    </BodyWrap>
  );
};

export default Checkout;
