import { hostURL } from "../../utils/global";

const Confirm = (props) => {

  const orderHandler = (event) => {
    event.preventDefault();

    const postOrder = async () => {
      const respone = await fetch(`${hostURL}/order`, {
        credentials: "include",
        method: "POST",
      });
      const data = await respone.json();
      console.log(data);
    };
    postOrder();
  };

  return (
    <div>
      <p>Confirm</p>
      <button onClick={orderHandler}>Xác nhận đặt hàng</button>
    </div>
  );
};

export default Confirm;
